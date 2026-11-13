import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { beneficios } from '../data';

function Beneficios() {
  return (
    <Container component="section" id="beneficios" maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
      <Typography color="primary" variant="overline" sx={{ fontWeight: 700 }}>
        SERVICIO DE GUANTE BLANCO
      </Typography>
      <Typography variant="h3" component="h2" sx={{ mb: 7 }}>
        La Distinción Lujo Lujitos
      </Typography>

      <Box sx={{ display: 'grid', gap: 5, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        {beneficios.map((b) => (
          <Box key={b.id}>
            <Avatar
              src={b.imagen}
              alt={b.titulo}
              sx={{ width: 84, height: 84, mx: 'auto', mb: 3, border: 1, borderColor: 'primary.main', p: 0.5 }}
            />
            <Typography variant="h6" component="h3" sx={{ mb: 1.5 }}>{b.titulo}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 320, mx: 'auto' }}>
              {b.texto}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Beneficios;
