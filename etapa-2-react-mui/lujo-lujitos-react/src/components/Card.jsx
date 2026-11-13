// Tarjeta de un auto: imagen + nombre, y los datos que se le pasen como children.
function Card({ imagen, titulo, children }) {
  return (
    <article className="auto">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <div className="auto-datos">{children}</div>
    </article>
  )
}

export default Card
