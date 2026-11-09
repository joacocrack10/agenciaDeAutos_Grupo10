import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

function Login({ abierto, cerrar, sesion, setSesion }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acepto, setAcepto] = useState(false);
  const [error, setError] = useState('');

  function manejarEnvio(e) {
    e.preventDefault(); // evita que la página se recargue
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (!acepto) {
      setError('Tenés que aceptar los términos para ingresar.');
      return;
    }
    setSesion({ email }); // se guarda en localStorage (solo el email, nunca la contraseña)
    setEmail('');
    setPassword('');
    setAcepto(false);
    setError('');
  }

  function cerrarSesion() {
    setSesion(null); // el hook borra la clave de localStorage
  }

  return (
    <Dialog open={abierto} onClose={cerrar} fullWidth maxWidth="xs">
      <DialogTitle sx={{ textAlign: 'center' }}>
        {sesion ? 'Tu cuenta' : 'Iniciar Sesión'}
      </DialogTitle>
      <DialogContent>
        {sesion ? (
          <>
            <Alert severity="success" sx={{ mb: 2 }}>Bienvenido, {sesion.email}</Alert>
            <Button fullWidth variant="outlined" onClick={cerrarSesion}>Cerrar sesión</Button>
          </>
        ) : (
          <form onSubmit={manejarEnvio}>
            <TextField
              label="Correo electrónico" type="email" required fullWidth margin="normal"
              placeholder="tu@correo.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Contraseña" type="password" required fullWidth margin="normal"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox checked={acepto} onChange={(e) => setAcepto(e.target.checked)} />}
              label="Acepto los términos y condiciones"
            />
            {error && <Alert severity="error" sx={{ my: 1 }}>{error}</Alert>}
            <Button type="submit" variant="contained" fullWidth size="large" sx={{ mt: 2 }}>
              Ingresar
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default Login;
