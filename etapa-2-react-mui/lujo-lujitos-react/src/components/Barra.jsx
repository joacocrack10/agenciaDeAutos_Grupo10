import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Barra({ modo, cambiarModo, sesion, abrirLogin }) {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: 'blur(10px)', borderBottom: 1, borderColor: 'divider', zIndex: 1100 }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 6 }, py: 1, flexWrap: 'wrap', gap: 1 }}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{ flexGrow: 1, letterSpacing: '0.08em', color: 'inherit', textDecoration: 'none' }}
        >
          LUJO LUJITOS
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button color="primary" component={Link} to="/galeria">Modelos</Button>
          <Button color="primary" component={Link} to="/turno">Contacto</Button>
          <Button color="primary" component={Link} to="/admin">Agenda</Button>
        </Box>

        <Button variant="outlined" component={Link} to="/turno">
          Reservar Cita
        </Button>
        <Button
          color="inherit"
          onClick={abrirLogin}
          sx={{ textTransform: 'none', letterSpacing: 0 }}
        >
          {sesion ? sesion.email : 'Ingresar'}
        </Button>
        <Button color="inherit" onClick={cambiarModo} aria-label="Cambiar modo claro u oscuro" sx={{ minWidth: 0 }}>
          {modo === 'dark' ? '☀' : '☾'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Barra;
