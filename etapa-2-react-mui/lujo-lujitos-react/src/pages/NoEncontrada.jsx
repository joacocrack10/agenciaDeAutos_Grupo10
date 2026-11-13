import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <Box sx={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', px: 2 }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Página no encontrada
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Esa dirección no existe.
        </Typography>
        <Button component={Link} to="/" variant="contained">
          Volver al inicio
        </Button>
      </Box>
    </Box>
  );
}

export default NoEncontrada;
