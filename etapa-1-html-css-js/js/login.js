// Inicio de sesión: al tocar "Ingresar" lleva a la home.
// El sitio todavía no tiene backend, así que no se valida el usuario contra ningún servidor:
// el navegador solo chequea que el email tenga formato válido y que la contraseña no esté vacía.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // no mandar los datos a ningún lado (ni dejarlos en la URL)
    window.location.href = 'index.html';
  });
});
