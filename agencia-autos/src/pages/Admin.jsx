import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:4000';

export default function Admin() {
  const [turnos, setTurnos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  // 1. Obtener la lista de turnos (GET)
  const cargarTurnos = async () => {
    try {
      setCargando(true);
      setError('');
      const response = await fetch(`${API_URL}/turnos`);
      
      if (!response.ok) {
        throw new Error('Error al conectar con el servidor.');
      }
      
      const data = await response.json();
      setTurnos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarTurnos();
  }, []);

  // 2. Eliminar un turno agendado (DELETE)
  const handleEliminar = async (id) => {
    if (!window.confirm('¿Desea cancelar esta cita de consulta?')) return;

    try {
      const response = await fetch(`${API_URL}/turnos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar el turno.');
      }

      // Actualizar el estado local removiendo el turno borrado
      setTurnos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <main className="container" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
      <section className="info-section" style={{ marginBottom: '2rem' }}>
        <span className="badge-tag">PANEL DE CONTROL</span>
        <h1>Gestión de Citas Agendadas</h1>
        <p className="description">
          Consulte las solicitudes recibidas y gestione la disponibilidad de la agenda del showroom.
        </p>
      </section>

      {cargando ? (
        <p style={{ color: 'var(--text-muted)' }}>Cargando agenda...</p>
      ) : error ? (
        <p style={{ color: 'var(--accent-red)' }}>{error}</p>
      ) : turnos.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No hay turnos registrados en este momento.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--card-bg)', borderRadius: '12px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-dark)', textAlign: 'left', color: 'var(--accent-red)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                <th style={{ padding: '1rem' }}>CLIENTE</th>
                <th style={{ padding: '1rem' }}>TELÉFONO</th>
                <th style={{ padding: '1rem' }}>MODELO</th>
                <th style={{ padding: '1rem' }}>FECHA Y HORA</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid var(--border-dark)', fontSize: '0.9rem' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>{item.nombre}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{item.telefono}</td>
                  <td style={{ padding: '1rem' }}>{item.modelo}</td>
                  <td style={{ padding: '1rem', color: 'var(--accent-red)' }}>{item.fechaFormateada || item.fecha}</td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <button
                      onClick={() => handleEliminar(item.id)}
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid var(--accent-red)',
                        color: 'var(--accent-red)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        fontWeight: '700'
                      }}
                    >
                      CANCELAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}