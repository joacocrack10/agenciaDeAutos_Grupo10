import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Barra({ modo, cambiarModo }) {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: 'blur(10px)', borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 6 }, py: 1 }}>
        <Typography variant="h6" sx={{ flexGrow: 1, letterSpacing: '0.08em' }}>
          LUJO LUJITOS
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, mr: 3 }}>
          <Button color="primary" component="a" href="#modelos">Modelos</Button>
          <Button color="primary" component="a" href="#contacto">Contacto</Button>
        </Box>

        <Button variant="outlined" component="a" href="#contacto">
          Reservar Cita
        </Button>
        <Button color="inherit" onClick={cambiarModo} aria-label="Cambiar modo claro u oscuro" sx={{ ml: 1, minWidth: 0 }}>
          {modo === 'dark' ? '☀' : '☾'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Barra;
