import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Agencia Grupo 10</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/turno">Solicitar Turno</Link>
        <Link to="/admin">Administración</Link>
      </nav>
    </header>
  );
}