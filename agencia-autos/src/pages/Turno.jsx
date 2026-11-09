import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:4000';

export default function Turno() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    modelo: '',
    fecha: ''
  });

  // Estados de la API (Patrón de 3 estados)
  const [modelos, setModelos] = useState([]);
  const [cargandoModelos, setCargandoModelos] = useState(true);
  const [errorModelos, setErrorModelos] = useState('');

  // Estados de animación y modal
  const [minDate, setMinDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [btnText, setBtnText] = useState('ENVIAR SOLICITUD SEGURA');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ nombre: '', modelo: '', fechaFormat: '' });

  // 1. OBTENER MODELOS DESDE LA API (GET + useEffect + AbortController)
  useEffect(() => {
    const controller = new AbortController();

    async function fetchModelos() {
      try {
        setCargandoModelos(true);
        setErrorModelos('');
        const response = await fetch(`${API_URL}/modelos`, { signal: controller.signal });
        
        if (!response.ok) {
          throw new Error(`Error en el servidor: ${response.status}`);
        }
        
        const data = await response.json();
        setModelos(data);
        
        // Seleccionar el primer modelo por defecto si existen
        if (data.length > 0) {
          setFormData((prev) => ({ ...prev, modelo: data[0].nombre }));
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setErrorModelos('No se pudieron cargar los modelos desde el servidor.');
        }
      } finally {
        setCargandoModelos(false);
      }
    }

    fetchModelos();

    // Limpieza al desmontar el componente
    return () => controller.abort();
  }, []);

  // 2. Formatear la fecha/hora mínima actual
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setMinDate(`${year}-${month}-${day}T${hours}:${minutes}`);
  }, []);

  // Formateador dinámico para número telefónico VIP
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (!value.startsWith('34') && value.length > 0) {
      value = '34' + value;
    }
    
    let formatted = '';
    if (value.length > 0) formatted += '+' + value.substring(0, 2);
    if (value.length > 2) formatted += ' ' + value.substring(2, 5);
    if (value.length > 5) formatted += ' ' + value.substring(5, 8);
    if (value.length > 8) formatted += ' ' + value.substring(8, 11);
    
    setFormData((prev) => ({ ...prev, telefono: formatted }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // 3. GUARDAR TURNO EN EL BACKEND (POST + fetch)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fechaVal = new Date(formData.fecha);
    const fechaFormat = fechaVal.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });

    setIsSubmitting(true);
    setBtnText('ENCRIPTANDO DATOS...');

    try {
      // Petición HTTP POST al servidor mock
      const response = await fetch(`${API_URL}/turnos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: formData.nombre.trim(),
          telefono: formData.telefono,
          modelo: formData.modelo,
          fecha: formData.fecha,
          fechaFormateada: fechaFormat,
          creadoEn: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('No se pudo procesar la reserva en la base de datos.');
      }

      setTimeout(() => {
        setBtnText('VERIFICANDO DISPONIBILIDAD...');
        
        setTimeout(() => {
          setIsSubmitting(false);
          setBtnText('ENVIAR SOLICITUD SEGURA');
          setModalData({
            nombre: formData.nombre.trim(),
            modelo: formData.modelo,
            fechaFormat: fechaFormat
          });
          setShowModal(true);
        }, 1000);
      }, 800);

    } catch (err) {
      alert('Error de conexión: ' + err.message);
      setIsSubmitting(false);
      setBtnText('ENVIAR SOLICITUD SEGURA');
    }
  };

  const closeModal = () => {
    setFormData({
      nombre: '',
      telefono: '',
      modelo: modelos.length > 0 ? modelos[0].nombre : '',
      fecha: ''
    });
    setShowModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  return (
    <main className="container">
      
      {/* SECCIÓN IZQUIERDA: INFORMACIÓN */}
      <section className="info-section">
        <span className="badge-tag">LA EXPERIENCIA FÍSICA</span>
        <h1>Visite Nuestro<br />Showroom Privado</h1>
        <p className="description">
          Mantenemos un espacio de alta seguridad e intimidad donde podrá realizar pruebas de manejo privadas y diseñar su vehículo bajo luz controlada de estudio.
        </p>

        <div className="contact-list">
          <div className="contact-item">
            <div className="icon-box" aria-hidden="true">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div className="contact-text">
              <label>DIRECCIÓN PRINCIPAL</label>
              <span>Av. de los Príncipes 104, Zona Élite, Madrid</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box" aria-hidden="true">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-text">
              <label>LÍNEA DIRECTA DIRECTIVA</label>
              <span>+34 900 897 122</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DERECHA: FORMULARIO */}
      <section className="form-card">
        <h2>Agendar Consulta Personal</h2>
        <p className="subtitle">Un asesor premium se comunicará para validar sus credenciales de visita.</p>

        <form id="appointmentForm" autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-grid">
            
            <div className="form-group">
              <label htmlFor="nombre">NOMBRE COMPLETO</label>
              <input 
                type="text" 
                id="nombre" 
                placeholder="Ej. Alejandro Sanz" 
                required 
                minLength={3}
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">TELÉFONO VIP</label>
              <input 
                type="tel" 
                id="telefono" 
                placeholder="+34 600 000 000" 
                required 
                value={formData.telefono}
                onChange={handlePhoneChange}
              />
            </div>

            <div className="form-group full">
              <label htmlFor="modelo">MODELO DE INTERÉS</label>
              {cargandoModelos ? (
                <select disabled><option>Cargando vehículos del servidor...</option></select>
              ) : errorModelos ? (
                <p style={{ color: '#e50914', fontSize: '0.8rem' }}>{errorModelos}</p>
              ) : (
                <select 
                  id="modelo" 
                  required 
                  value={formData.modelo}
                  onChange={handleChange}
                >
                  {modelos.map((item) => (
                    <option key={item.id} value={item.nombre}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="form-group full">
              <label htmlFor="fecha">FECHA Y HORA DE CITA PREFERIDA</label>
              <input 
                type="datetime-local" 
                id="fecha" 
                required 
                min={minDate}
                value={formData.fecha}
                onChange={handleChange}
              />
            </div>

          </div>

          <button type="submit" className="btn-submit" id="submitBtn" disabled={isSubmitting || cargandoModelos}>
            <span>{btnText}</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <div className="security-badge">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8s0 0 0 0z" />
            </svg>
            <span>Conexión Encriptada de Alta Seguridad (256-bit SSL)</span>
          </div>
        </form>

        {/* MODAL DE CONFIRMACIÓN */}
        <div 
          className={`modal-overlay ${showModal ? 'active' : ''}`} 
          id="successModal" 
          role="dialog" 
          aria-modal="true" 
          aria-hidden={!showModal}
        >
          <div className="check-icon">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>Solicitud Confirmada</h3>
          <p id="modalMessage">
            Estimado/a <strong>{modalData.nombre}</strong>, su cita para conocer el <strong>{modalData.modelo}</strong> ha sido agendada preliminarmente para el <strong>{modalData.fechaFormat}</strong>.
          </p>
          <button className="btn-reset" id="resetBtn" onClick={closeModal}>
            Realizar Otra Solicitud
          </button>
        </div>

      </section>
    </main>
  );
}