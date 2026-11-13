import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { autos } from '../data';

function Autos() {
  return (
    <Container component="section" id="modelos" maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
      <Typography color="primary" variant="overline" sx={{ fontWeight: 700 }}>
        CURADURÍA DE ÉLITE
      </Typography>
      <Typography variant="h3" component="h2" sx={{ mb: 7 }}>
        Modelos en Exhibición Previa
      </Typography>

      {/* Grilla de 3 columnas en pantallas medianas, 1 en celular */}
      <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        {autos.map((auto) => (
          <Card key={auto.id} sx={{ textAlign: 'left', border: 1, borderColor: 'divider' }}>
            <CardMedia component="img" height="230" image={auto.imagen} alt={auto.marca + ' ' + auto.modelo} />
            <CardContent>
              <Typography color="primary" variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.14em' }}>
                {auto.marca}
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>{auto.modelo}</Typography>

              <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 2, mb: 2 }}>
                {auto.specs.map(([etiqueta, valor]) => (
                  <Box key={etiqueta} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                    <Typography variant="body2" color="text.secondary">{etiqueta}</Typography>
                    <Typography variant="body2">{valor}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="caption" color="text.secondary">PRECIO ESTIMADO</Typography>
              <Typography variant="h5">{auto.precio}</Typography>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 3 }}>
              <Button fullWidth variant="outlined" component={Link} to="/turno">Consultar</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Autos;
