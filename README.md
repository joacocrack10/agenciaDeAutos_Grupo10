# Agencia de Autos — Lujo Lujitos

El repositorio guarda el paso a paso. Cada etapa se abre por su cuenta. El orden sale de `git log`: primero el HTML (septiembre y 5 de noviembre de 2026), después React con Material UI (5 de noviembre) y al final la app con React Router y json-server (9 de noviembre).

**Etapa para abrir y correr: `etapa-2-react-mui/lujo-lujitos-react`.** Es la app que reúne el sitio. La etapa 3 es la app aparte de turnos, con su propia API.

```
cd etapa-2-react-mui/lujo-lujitos-react
npm install
npm run dev
```

## etapa-1-html-css-js

Versión estática.

- `index.html` es el sitio del 5 de noviembre. Estilos en `css/`, scripts en `js/`, fotos en `img/`, video en `video/hero.mp4`. Se abre `index.html`.
- `version-inicial/` es el HTML anterior (`body.html`, galería y login), con sus imágenes y el video al lado.
- `prototipo-showroom/` era la carpeta `TURNO`. `prototipo-turno/` era la carpeta `turno`. En Windows los dos nombres son la misma carpeta, por eso quedaron con nombres distintos.

## etapa-2-react-mui

`lujo-lujitos-react`. React, Vite y Material UI. Home, login, galería, turno y agenda. Es la etapa actual.

## etapa-3-react-router-api

`agencia-autos`. React Router y las citas en json-server (`db.json`, puerto 4000).

```
cd etapa-3-react-router-api/agencia-autos
npm install
npm run services
npm run dev
```

`npm run services` y `npm run dev` van en dos terminales. La primera deja la API en el puerto 4000. La segunda abre la app.

## archivo

Copias y sueltos que no son una etapa: la carpeta anidada `agenciaDeAutos_Grupo10`, `hola.txt`, `Nuevox.txt`, `download`, `download (1)`, archivos sin extensión y notas. No se borró nada.
