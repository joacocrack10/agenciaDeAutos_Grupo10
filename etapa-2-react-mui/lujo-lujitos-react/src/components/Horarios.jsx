import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { horarios } from '../data';

function Horarios() {
  return (
    <Container component="section" id="horarios" maxWidth="md" sx={{ py: 10 }}>
      <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
        Horarios de Atención
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Día</TableCell>
              <TableCell>Horario</TableCell>
              <TableCell>Atención</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {horarios.map((h) => (
              <TableRow key={h.id}>
                <TableCell>{h.diaTexto}</TableCell>
                <TableCell>{h.desde}:00 a {h.hasta}:00</TableCell>
                <TableCell>{h.atencion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Horarios;
