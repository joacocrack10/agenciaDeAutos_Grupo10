document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointmentForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('span');
  const modal = document.getElementById('successModal');
  const modalMessage = document.getElementById('modalMessage');
  const resetBtn = document.getElementById('resetBtn');
  const telefonoInput = document.getElementById('telefono');
  const fechaInput = document.getElementById('fecha');

  // 1. Establecer fecha mínima en el selector (mañana)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(10, 0, 0, 0);
  fechaInput.min = tomorrow.toISOString().slice(0, 16);

  // 2. Formateador dinámico para número de teléfono VIP (+34 XXX XXX XXX)
  telefonoInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (!value.startsWith('34') && value.length > 0) {
      value = '34' + value;
    }
    
    let formatted = '';
    if (value.length > 0) formatted += '+' + value.substring(0, 2);
    if (value.length > 2) formatted += ' ' + value.substring(2, 5);
    if (value.length > 5) formatted += ' ' + value.substring(5, 8);
    if (value.length > 8) formatted += ' ' + value.substring(8, 11);
    
    e.target.value = formatted;
  });

  // 3. Procesamiento y animación del envío
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const modelo = document.getElementById('modelo').value;
    const fechaVal = new Date(fechaInput.value);

    const fechaFormat = fechaVal.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });

    submitBtn.disabled = true;
    btnText.textContent = 'ENCRIPTANDO DATOS...';

    setTimeout(() => {
      btnText.textContent = 'VERIFICANDO DISPONIBILIDAD...';
      
      setTimeout(() => {
        submitBtn.disabled = false;
        btnText.textContent = 'ENVIAR SOLICITUD SEGURA';

        modalMessage.innerHTML = `Estimado/a <strong>${nombre}</strong>, su cita para conocer el <strong>${modelo}</strong> ha sido agendada preliminarmente para el <strong>${fechaFormat}</strong>.`;
        
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
      }, 1000);

    }, 800);
  });

  // 4. Reiniciar formulario
  const closeModal = () => {
    form.reset();
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  };

  resetBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});