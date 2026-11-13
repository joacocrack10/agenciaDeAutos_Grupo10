import Hero from '../components/Hero';
import Autos from '../components/Autos';
import Beneficios from '../components/Beneficios';
import Horarios from '../components/Horarios';

function Inicio({ sesion, abrirLogin }) {
  return (
    <>
      <Hero sesion={sesion} abrirLogin={abrirLogin} />
      <Autos />
      <Beneficios />
      <Horarios />
    </>
  );
}

export default Inicio;
