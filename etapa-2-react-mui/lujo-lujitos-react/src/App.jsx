import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Barra from './components/Barra';
import Login from './components/Login';
import Pie from './components/Pie';
import useLocalStorage from './hooks/useLocalStorage';
import Admin from './pages/Admin';
import Galeria from './pages/Galeria';
import Inicio from './pages/Inicio';
import NoEncontrada from './pages/NoEncontrada';
import Turno from './pages/Turno';

function ScrollArriba() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App({ modo, cambiarModo }) {
  const [sesion, setSesion] = useLocalStorage('sesion', null);
  const [loginAbierto, setLoginAbierto] = useState(false);
  const { pathname } = useLocation();
  const abrirLogin = () => setLoginAbierto(true);

  return (
    <>
      <ScrollArriba />
      <Barra modo={modo} cambiarModo={cambiarModo} sesion={sesion} abrirLogin={abrirLogin} />
      <Routes>
        <Route path="/" element={<Inicio sesion={sesion} abrirLogin={abrirLogin} />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/turno" element={<Turno />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
      <Login
        abierto={loginAbierto}
        cerrar={() => setLoginAbierto(false)}
        sesion={sesion}
        setSesion={setSesion}
      />
      {pathname === '/' && <Pie />}
    </>
  );
}

export default App;
