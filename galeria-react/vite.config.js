import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const ruta = (carpeta) => fileURLToPath(new URL(`./src/${carpeta}`, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Alias para no escribir rutas relativas largas (../../components/...)
    alias: {
      '@components': ruta('components'),
      '@pages': ruta('pages'),
      '@styles': ruta('styles'),
      '@data': ruta('data'),
      '@assets': ruta('assets'),
    },
  },
})
