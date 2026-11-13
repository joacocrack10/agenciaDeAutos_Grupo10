// Botones para ver todas las marcas o una sola.
function FiltroMarcas({ marcas, seleccionada, onSeleccionar }) {
  const opciones = [{ id: 'todas', nombre: 'Todas', color: '#444444' }, ...marcas]

  return (
    <nav className="filtro-marcas" aria-label="Filtrar por marca">
      {opciones.map((opcion) => (
        <button
          key={opcion.id}
          type="button"
          className={opcion.id === seleccionada ? 'activo' : ''}
          aria-pressed={opcion.id === seleccionada}
          style={{ '--color-marca': opcion.color }}
          onClick={() => onSeleccionar(opcion.id)}
        >
          {opcion.nombre}
        </button>
      ))}
    </nav>
  )
}

export default FiltroMarcas
