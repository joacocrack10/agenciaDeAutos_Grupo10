# Galería de Autos — React

Versión en React de la galería de **Lujo Lujitos** (Grupo 10). Se ve igual que la galería HTML y además permite filtrar los modelos por marca.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir http://localhost:5173 (también anda en http://localhost:5173/galeria).

## Estructura

```
src/
├── main.jsx                 Arranque: BrowserRouter + estilos globales
├── App.jsx                  Rutas ("/" y "/galeria")
├── pages/
│   └── Galeria.jsx          Página: encabezado, filtro, secciones y pie
├── components/
│   ├── Card.jsx             Tarjeta de un auto (imagen + nombre + children)
│   ├── SeccionMarca.jsx     Título "Modelos X" + tarjetas de esa marca
│   ├── FiltroMarcas.jsx     Botones Todas / Ferrari / Lamborghini / ...
│   └── BotonVolver.jsx      "← Volver al inicio" (Link a "/")
├── data/
│   └── modelos.js           Las 5 marcas y sus 12 modelos (un solo lugar)
├── styles/
│   ├── _variables.scss      Colores y fuentes
│   ├── _mixins.scss         Mixin colores($fondo, $letra)
│   ├── global.scss          Fondo y márgenes del body
│   ├── galeria.scss         Estilos de la página (anidados)
│   └── boton-volver.scss
└── assets/modelos/          Fotos de los autos
```

## Qué se usa de React

- **Componentes y props**: `Galeria` arma la página con `FiltroMarcas`, `SeccionMarca`, `Card` y `BotonVolver`.
- **children**: `Card` recibe imagen y título por props, y los datos del auto como `children`.
- **Datos separados**: todo sale de `data/modelos.js`; las secciones y tarjetas se generan con `.map()` y `key`.
- **Estado con `useState`**: la marca elegida en el filtro decide qué secciones se muestran.
- **React Router**: `BotonVolver` usa `<Link>`.
- **SASS**: variables, mixin y estilos anidados.
- **Alias en `vite.config.js`**: `@components`, `@pages`, `@styles`, `@data`, `@assets`.
- **Imágenes desde `assets`**: se importan en `modelos.js`.

## Sumarlo al proyecto del grupo

1. Copiar `src/pages/Galeria.jsx`, los 4 componentes, `src/data/`, los estilos (menos `global.scss`) y `src/assets/modelos/`.
2. Instalar lo que usa: `npm install react-router-dom` y `npm install sass --save-dev`.
3. Agregar los mismos alias en su `vite.config.js` (o cambiar los imports por rutas relativas).
4. Agregar la ruta: `<Route path="/galeria" element={<Galeria />} />`.
5. Si el layout del grupo ya tiene footer, borrar el `<footer>` de `Galeria.jsx`.

## Agregar un modelo

1. Poner la foto en `src/assets/modelos/` (nombre en minúscula y con guiones).
2. En `src/data/modelos.js`: importarla arriba y agregar el objeto dentro de su marca
   (`nombre`, `imagen`, `motor`, `potencia` en CV, `aceleracion` en segundos, `traccion`, `precio` en USD).

Para una marca nueva, agregar otro objeto en `marcas` con `id`, `nombre`, `color` y `modelos`: la sección, su color y el botón del filtro aparecen solos.
