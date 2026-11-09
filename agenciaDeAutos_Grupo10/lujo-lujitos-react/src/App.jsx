import { useState } from 'react';
import Barra from './components/Barra';
import Hero from './components/Hero';
import Autos from './components/Autos';
import Beneficios from './components/Beneficios';
import Horarios from './components/Horarios';
import Login from './components/Login';
import Pie from './components/Pie';
import useLocalStorage from './hooks/useLocalStorage';

function App({ modo, cambiarModo }) {
  const [sesion, setSesion] = useLocalStorage('sesion', null); // null = sin sesión
  const [loginAbierto, setLoginAbierto] = useState(false);

  return (
    <>
      <Barra modo={modo} cambiarModo={cambiarModo} />
      <Hero sesion={sesion} abrirLogin={() => setLoginAbierto(true)} />
      <Autos />
      <Beneficios />
      <Horarios />
      <Login
        abierto={loginAbierto}
        cerrar={() => setLoginAbierto(false)}
        sesion={sesion}
        setSesion={setSesion}
      />
      <Pie />
    </>
  );
}

export default App;
