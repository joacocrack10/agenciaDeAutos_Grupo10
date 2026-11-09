import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const redes = [
  { id: 1, nombre: 'Instagram', url: '#' },
  { id: 2, nombre: 'Facebook', url: '#' },
  { id: 3, nombre: 'YouTube', url: '#' },
];

function Pie() {
  return (
    <Box component="footer" id="contacto" sx={{ py: 4, px: 3, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 1 }}>
        {redes.map((r) => (
          <Link key={r.id} href={r.url} color="text.secondary" underline="hover">{r.nombre}</Link>
        ))}
      </Box>
      <Typography variant="body2" color="text.secondary">© 2026 Lujo Lujitos</Typography>
    </Box>
  );
}

export default Pie;
