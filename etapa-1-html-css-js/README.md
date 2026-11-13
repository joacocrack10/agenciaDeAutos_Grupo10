# Agencia de Autos — Lujo Lujitos 🚗🚗🚗

## Descripción del proyecto

Agencia de autos de lujo dedicada a ofrecer vehículos exclusivos y de alta gama para clientes que buscan una experiencia de compra diferente. La plataforma permite conocer los modelos disponibles, sus principales características, prestaciones y detalles relevantes antes de tomar una decisión.

Además, busca brindar un servicio de asesoramiento personalizado, ayudando a cada cliente a encontrar el automóvil que mejor se adapte a sus necesidades, preferencias y expectativas. El público objetivo está compuesto principalmente por personas con una intención real de compra de vehículos de lujo, interesadas en recibir información confiable, comparar alternativas y acceder a una atención especializada durante el proceso de elección y adquisición de su próximo automóvil.

## Público objetivo

El público objetivo está compuesto por personas mayores de edad con intención real de adquirir un automóvil de lujo, que buscan vehículos exclusivos, de alta gama y con prestaciones superiores. Está dirigido a clientes interesados en recibir asesoramiento personalizado, comparar diferentes modelos y conocer sus características antes de realizar una compra.

## Estructura del proyecto

```
agenciaDeAutos_Grupo10/
├── index.html        Página de inicio (hero con video, modelos destacados, beneficios)
├── galeria.html      Galería de modelos (Ferrari, Lamborghini, Koenigsegg)
├── login.html        Inicio de sesión
├── turno.html        Reserva de cita / contacto
├── css/
│   ├── base.css      Estilos comunes: variables, reset, header, botones, footer
│   ├── boton-volver.css  Botón "Volver al inicio" (galería, login, turno)
│   ├── inicio.css    Solo index.html
│   ├── login.css     Solo login.html
│   ├── galeria.css   Solo galeria.html
│   └── turno.css     Solo turno.html
├── js/
│   ├── login.js      Inicio de sesión (al ingresar lleva a la home)
│   └── turno.js      Formulario de reserva
├── img/              Todas las imágenes (marca-modelo.ext)
└── video/
    └── hero.mp4      Video de fondo de la home
```

Para verlo, abrí `index.html` en el navegador (o usá la extensión **Live Server** de VS Code).

### Reglas para mantenerlo ordenado

- **Un archivo, un lugar.** No copiar carpetas dentro del repo ni duplicar archivos "por las dudas": para eso está el historial de git.
- **Estilos compartidos van en `css/base.css`.** Si una regla se usa en más de una página, va ahí; no se copia en el CSS de cada página.
- **Nombres en minúscula, con guiones y sin espacios ni tildes:** `ferrari-roma.jpg`, no `la ferrari.jpg` ni `IMG_3750.jpg`.
- **Imágenes en `img/`, CSS en `css/`, JS en `js/`.** Nada suelto en la raíz salvo los `.html`.
- **Guardar siempre en UTF-8** (en VS Code se ve abajo a la derecha).
- **Para sumar un modelo nuevo:** agregar la tarjeta en `galeria.html` (dentro del `<div class="galeria marca">` de su marca) y la opción en el `<select id="modelo">` de `turno.html`, con el mismo nombre. Si es una marca nueva, crear su sección y su color en `css/galeria.css`.
- **Antes de subir algo, revisar que no queden archivos de prueba** (`hola.txt`, archivos vacíos, versiones viejas).

## Guía para nuevos integrantes

Bienvenido al proyecto Agencia de Autos. Esta guía explica los pasos básicos para comenzar a trabajar con el repositorio y mantener una correcta organización del código.

### Requisitos

Antes de comenzar, es necesario tener instalado:

- Git
- Un editor de código, por ejemplo Visual Studio Code
- Un navegador web

Podemos verificar que Git esté instalado con:

```bash
git --version
```

### Clonar el repositorio

Primero debemos clonar el repositorio en nuestra computadora:

```bash
git clone <URL-del-repositorio>
cd agenciaDeAutos_Grupo10
```

### Flujo de trabajo

```
Actualizar main          git checkout main && git pull
     ↓
Crear una rama           git checkout -b nombre-de-la-tarea
     ↓
Realizar cambios
     ↓
git add + git commit     git add . && git commit -m "Descripción corta"
     ↓
git push                 git push -u origin nombre-de-la-tarea
     ↓
Crear Pull Request
     ↓
Revisión
     ↓
Merge a main
     ↓
Actualizar main
```

### Pull Request

En el Pull Request debemos:

- Indicar brevemente qué cambios realizamos.
- Explicar si existe alguna consideración importante.
- Comprobar que el proyecto funcione correctamente.
- Esperar la revisión de otro integrante del equipo.

No se debe realizar el merge del Pull Request sin la revisión correspondiente del equipo.

### Buenas prácticas

- No trabajar directamente sobre main.
- Crear una rama por funcionalidad o tarea.
- Realizar commits pequeños y descriptivos.
- Actualizar la rama antes de comenzar a trabajar.
- Probar los cambios antes de crear el Pull Request.
- No subir archivos innecesarios al repositorio.
- Revisar `git status` antes de realizar commits.
- Comunicar al equipo si surge algún conflicto o problema.
