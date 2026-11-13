import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { horarios } from '../data';

function Hero({ sesion, abrirLogin }) {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    function revisarHorario() {
      const ahora = new Date();
      const dia = ahora.getDay();
      const hora = ahora.getHours();
      setAbierto(horarios.some((h) => h.dia === dia && hora >= h.desde && hora < h.hasta));
    }
    revisarHorario(); // al aparecer
    const intervalo = setInterval(revisarHorario, 60000); // y cada 60 segundos
    return () => clearInterval(intervalo); // al desaparecer, frena el reloj
  }, []);

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative', minHeight: '88vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', px: { xs: 3, md: 6 }, overflow: 'hidden', isolation: 'isolate',
      }}
    >
      <Box
        component="video" autoPlay muted loop playsInline poster="/pexels-thekameragrapher-33621659.jpg"
        sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
      >
        <source src="/11095143-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </Box>
      <Box
        sx={{
          position: 'absolute', inset: 0, zIndex: -1,
          background: 'linear-gradient(180deg, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0.85) 75%, #0a0a0c 100%)',
        }}
      />

      <Box sx={{ maxWidth: 760, color: '#f5f5f0' }}>
        <Chip
          label={abierto ? 'ABIERTO' : 'CERRADO'}
          color={abierto ? 'success' : 'default'}
          variant="outlined"
          size="small"
          sx={{ mb: 2, fontWeight: 700, color: abierto ? undefined : '#a3a3ab' }}
        />
        <Typography variant="h1" sx={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
          LUJO{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>LUJITOS</Box>
        </Typography>
        <Typography variant="h5" component="h2" sx={{ fontFamily: 'inherit', fontWeight: 400, color: '#d8d8dc', mb: 2 }}>
          El arte de la ingeniería. La cumbre del rendimiento automotriz.
        </Typography>
        <Typography sx={{ color: '#a3a3ab', maxWidth: 560, mb: 4 }}>
          Establecemos el estándar absoluto para la adquisición de hiperdeportivos y berlinas de élite.
          Cada vehículo en nuestra galería representa una pieza histórica de diseño y potencia.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3 }}>
          <Button variant="contained" size="large" component={Link} to="/galeria">
            Explorar Modelos
          </Button>
          <Button variant="outlined" size="large" onClick={abrirLogin}>
            {sesion ? 'Mi cuenta' : 'Iniciar Sesión'}
          </Button>
          <Button color="inherit" component={Link} to="/galeria">
            Tour Virtual ▶
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
