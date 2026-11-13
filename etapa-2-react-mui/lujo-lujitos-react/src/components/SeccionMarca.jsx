import Card from './Card'
import { formatearPrecio } from '../data/modelos'

// Una sección por marca: título + tarjetas de sus modelos.
// El color de la marca llega por la variable CSS --color-marca.
function SeccionMarca({ marca }) {
  return (
    <section className="seccion-marca" style={{ '--color-marca': marca.color }}>
      <h2>{`Modelos ${marca.nombre}`}</h2>

      <div className="galeria">
        {marca.modelos.map((modelo) => (
          <Card key={modelo.id} imagen={modelo.imagen} titulo={modelo.nombre}>
            <p>{`Motor: ${modelo.motor}`}</p>
            <p>{`Potencia: ${modelo.potencia} CV`}</p>
            <p>{`0-100 km/h: ${modelo.aceleracion.toFixed(1)} s`}</p>
            <p>{`Tracción: ${modelo.traccion}`}</p>
            <p className="precio">{`Precio estimado: ${formatearPrecio(modelo.precio)}`}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default SeccionMarca
