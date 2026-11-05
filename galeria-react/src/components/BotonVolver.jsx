import { Link } from 'react-router-dom'
import '@styles/boton-volver.scss'

// Botón "Volver al inicio". Por defecto lleva a "/" (la home).
function BotonVolver({ to = '/' }) {
  return (
    <Link to={to} className="btn-volver">
      ← Volver al inicio
    </Link>
  )
}

export default BotonVolver
