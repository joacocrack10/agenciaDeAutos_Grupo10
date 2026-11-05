import { Route, Routes } from 'react-router-dom'
import Galeria from '@pages/Galeria'

// En este proyecto suelto la galería se ve en "/" y en "/galeria".
// En el proyecto del grupo alcanza con agregar la ruta "/galeria".
function App() {
  return (
    <Routes>
      <Route path="/" element={<Galeria />} />
      <Route path="/galeria" element={<Galeria />} />
    </Routes>
  )
}

export default App
