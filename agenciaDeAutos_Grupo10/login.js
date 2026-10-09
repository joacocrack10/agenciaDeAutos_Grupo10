document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('login-error');

  // Un email es válido si tiene formato correo@dominio.com
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 1. Dar formato al mail MIENTRAS se escribe:
  //    saca los espacios y lo pasa todo a minúsculas
  emailInput.addEventListener('input', () => {
    emailInput.value = emailInput.value.replace(/\s/g, '').toLowerCase();
    errorMsg.textContent = ''; // borra el error al volver a escribir
  });

  // 2. Revisar el formato al SALIR del campo
  emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    if (email !== '' && !emailRegex.test(email)) {
      errorMsg.textContent = 'El correo debe tener el formato nombre@dominio.com';
    }
  });

  // 3. Al enviar el formulario (demo, sin backend real)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const emailValido = emailRegex.test(email);
    const passwordValido = password.length >= 6;

    if (emailValido && passwordValido) {
      window.location.href = 'index.html';
    } else {
      errorMsg.textContent = 'Ingresá un correo válido y una contraseña de al menos 6 caracteres.';
    }
  });
});