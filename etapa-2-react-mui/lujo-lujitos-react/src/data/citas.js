import { marcas } from './modelos'

const CLAVE = 'turnos'

export const modelosDisponibles = marcas.flatMap((marca) =>
  marca.modelos.map((modelo) => ({
    id: modelo.id,
    nombre: modelo.nombre,
  }))
)

export function leerCitas() {
  try {
    const texto = localStorage.getItem(CLAVE)
    const datos = texto ? JSON.parse(texto) : []
    return Array.isArray(datos) ? datos : []
  } catch {
    return []
  }
}

export function guardarCita(cita) {
  const citas = leerCitas()
  const nueva = { id: crypto.randomUUID(), ...cita }
  localStorage.setItem(CLAVE, JSON.stringify([...citas, nueva]))
  return nueva
}

export function borrarCita(id) {
  const citas = leerCitas().filter((cita) => String(cita.id) !== String(id))
  localStorage.setItem(CLAVE, JSON.stringify(citas))
  return citas
}
