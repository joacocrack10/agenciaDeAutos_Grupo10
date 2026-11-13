import { useState } from 'react'
import BotonVolver from '../components/BotonVolver'
import FiltroMarcas from '../components/FiltroMarcas'
import SeccionMarca from '../components/SeccionMarca'
import { marcas } from '../data/modelos'
import '../styles/galeria.scss'

function Galeria() {
  // 'todas' o el id de una marca ('ferrari', 'porsche', ...)
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('todas')

  const marcasVisibles =
    marcaSeleccionada === 'todas'
      ? marcas
      : marcas.filter((marca) => marca.id === marcaSeleccionada)

  return (
    <div className="pagina-galeria">
      <header className="galeria-header">
        <BotonVolver />
        <h1>Galería de Autos</h1>
        <p>Conocé algunos de los autos más increíbles del mundo</p>
      </header>

      <FiltroMarcas
        marcas={marcas}
        seleccionada={marcaSeleccionada}
        onSeleccionar={setMarcaSeleccionada}
      />

      <main>
        {marcasVisibles.map((marca) => (
          <SeccionMarca key={marca.id} marca={marca} />
        ))}
      </main>

      <footer className="galeria-footer">
        <p>Galería de Autos - Grupo 10</p>
      </footer>
    </div>
  )
}

export default Galeria
