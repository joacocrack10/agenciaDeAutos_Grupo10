import { StrictMode, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import useLocalStorage from './hooks/useLocalStorage';
import './index.css';

const display = '"Playfair Display", Georgia, "Times New Roman", serif';
const texto = '"Inter", "Helvetica Neue", Arial, sans-serif';

function Raiz() {
  const [modo, setModo] = useLocalStorage('modo', 'dark');

  const tema = useMemo(
    () =>
      createTheme({
        palette: {
          mode: modo,
          primary: { main: '#ff1f3d', contrastText: '#0a0a0c' },
          ...(modo === 'dark' && {
            background: { default: '#0a0a0c', paper: '#131316' },
            text: { primary: '#f5f5f0', secondary: '#a3a3ab' },
          }),
        },
        shape: { borderRadius: 2 },
        typography: {
          fontFamily: texto,
          h1: { fontFamily: display, fontWeight: 700 },
          h2: { fontFamily: display, fontWeight: 700 },
          h3: { fontFamily: display, fontWeight: 700 },
          h4: { fontFamily: display, fontWeight: 700 },
          h5: { fontFamily: display, fontWeight: 700 },
          button: { fontWeight: 700, letterSpacing: '0.1em' },
        },
      }),
    [modo]
  );

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <App modo={modo} cambiarModo={() => setModo(modo === 'dark' ? 'light' : 'dark')} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Raiz />
    </BrowserRouter>
  </StrictMode>
);
