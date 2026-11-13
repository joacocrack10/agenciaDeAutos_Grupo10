import { expect, test } from '@playwright/test'

const RUTAS = ['/', '/galeria', '/turno', '/admin']

function vigilar(page) {
  const errores = []
  const recursos = []

  page.on('pageerror', (error) => errores.push(error.message))
  page.on('console', (msg) => {
    if (msg.type() !== 'error') return
    const texto = msg.text()
    if (texto.includes('favicon')) return
    errores.push(texto)
  })
  page.on('response', (response) => {
    const url = response.url()
    if (!url.startsWith('http://localhost:5173')) return
    if (response.status() >= 400) recursos.push(`${response.status()} ${url}`)
    const ruta = new URL(url).pathname
    if (/\.(jpg|jpeg|png|avif|webp|mp4|svg)$/i.test(ruta)) {
      const tipo = response.headers()['content-type'] || ''
      if (tipo.includes('text/html')) recursos.push(`no es un archivo ${url}`)
    }
  })

  return { errores, recursos }
}

test.describe('Lujo Lujitos', () => {
  test('cada ruta carga sin errores de consola ni recursos rotos', async ({ page }) => {
    const { errores, recursos } = vigilar(page)

    for (const ruta of RUTAS) {
      await page.goto(ruta)
      await page.waitForLoadState('networkidle')
      const rotas = await page.locator('img').evaluateAll((imagenes) =>
        imagenes.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.getAttribute('src'))
      )
      recursos.push(...rotas.map((src) => `imagen rota ${src}`))
    }

    expect(errores, errores.join('\n')).toEqual([])
    expect(recursos, recursos.join('\n')).toEqual([])
  })

  test('la navegacion recorre inicio, galeria, turno y agenda', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'LUJO LUJITOS', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Horarios de Atención' })).toBeVisible()

    await page.getByRole('link', { name: 'Modelos', exact: true }).click()
    await expect(page).toHaveURL(/\/galeria$/)
    await expect(page.getByRole('heading', { name: 'Galería de Autos' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Modelos Ferrari' })).toBeVisible()

    await page.getByRole('button', { name: 'Porsche' }).click()
    await expect(page.getByRole('heading', { name: 'Modelos Porsche' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Modelos Ferrari' })).toHaveCount(0)

    await page.getByRole('link', { name: 'Volver al inicio' }).click()
    await expect(page).toHaveURL('http://localhost:5173/')

    await page.getByRole('link', { name: 'Consultar' }).first().click()
    await expect(page).toHaveURL(/\/turno$/)
    await expect(page.getByRole('heading', { name: /Showroom Privado/ })).toBeVisible()

    await page.getByRole('link', { name: 'Agenda' }).click()
    await expect(page).toHaveURL(/\/admin$/)
    await expect(page.getByRole('heading', { name: 'Gestión de Citas Agendadas' })).toBeVisible()
  })

  test('el login acepta cualquier cuenta y muestra el correo arriba', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Ingresar' }).click()
    await page.getByLabel('Correo electrónico').fill('joaquin@correo.com')
    await page.getByLabel('Contraseña').fill('abc')
    await page.getByRole('button', { name: 'Ingresar' }).last().click()
    await expect(page.getByText('Tenés que aceptar los términos')).toBeVisible()

    await page.getByLabel('Acepto los términos y condiciones').check()
    await page.getByRole('button', { name: 'Ingresar' }).last().click()
    await expect(page.getByRole('button', { name: 'joaquin@correo.com' })).toBeVisible()

    await page.getByRole('button', { name: 'joaquin@correo.com' }).click()
    await expect(page.getByText('Bienvenido, joaquin@correo.com')).toBeVisible()

    await page.getByRole('button', { name: 'Cerrar sesión' }).click()
    await expect(page.getByRole('button', { name: 'Ingresar' }).first()).toBeVisible()
  })

  test('un turno queda en la agenda y se puede cancelar', async ({ page }) => {
    await page.goto('/turno')
    await page.getByLabel('NOMBRE COMPLETO').fill('Ana Perez')
    await page.getByLabel('TELÉFONO VIP').fill('1155551234')
    await page.getByLabel('MODELO DE INTERÉS').selectOption('Porsche 911')
    await page.getByLabel('FECHA Y HORA DE CITA PREFERIDA').fill('2026-12-15T11:30')
    await page.getByRole('button', { name: 'ENVIAR SOLICITUD SEGURA' }).click()

    await expect(page.getByRole('heading', { name: 'Solicitud Confirmada' })).toBeVisible()
    await expect(page.locator('#modalMessage')).toContainText('Ana Perez')
    await expect(page.locator('#modalMessage')).toContainText('Porsche 911')

    await page.getByRole('link', { name: 'Ver en la agenda' }).click()
    await expect(page).toHaveURL(/\/admin$/)
    await expect(page.getByRole('cell', { name: 'Ana Perez' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'Porsche 911' })).toBeVisible()

    page.once('dialog', (dialog) => dialog.accept())
    await page.getByRole('button', { name: 'CANCELAR' }).click()
    await expect(page.getByText('No hay turnos registrados')).toBeVisible()
  })

  test('el modo claro y oscuro cambia el fondo', async ({ page }) => {
    await page.goto('/')
    const fondoInicial = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
    await page.getByRole('button', { name: 'Cambiar modo claro u oscuro' }).click()
    await expect.poll(() => page.evaluate(() => getComputedStyle(document.body).backgroundColor)).not.toBe(fondoInicial)
  })

  test('una ruta inexistente avisa y permite volver', async ({ page }) => {
    await page.goto('/no-existe')
    await expect(page.getByRole('heading', { name: /no existe|no encontrada/i })).toBeVisible()
    await page.getByRole('link', { name: /inicio/i }).click()
    await expect(page).toHaveURL('http://localhost:5173/')
  })
})
