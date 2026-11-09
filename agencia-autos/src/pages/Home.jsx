import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:4000';

export default function Home() {
  const [modelos, setModelos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchModelos() {
      try {
        setCargando(true);
        setError('');
        const response = await fetch(`${API_URL}/modelos`, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('No se pudo conectar con el catálogo de vehículos.');
        }

        const data = await response.json();
        setModelos(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setCargando(false);
      }
    }

    fetchModelos();

    return () => controller.abort();
  }, []);

  return (
    <main className="container" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
      
      {/* BANNER PRINCIPAL */}
      <section style={{ textAlign: 'center', margin: '2rem 0 4rem' }}>
        <span className="badge-tag">EXCLUSIVIDAD Y RENDIMIENTO</span>
        <h1 style={{ fontSize: '3rem', margin: '1rem 0' }}>Colección de Superdeportivos</h1>
        <p className="description" style={{ margin: '0 auto', maxWidth: '600px' }}>
          Explore los modelos insignia disponibles para prueba privada en nuestro showroom exclusivo de Madrid.
        </p>
      </section>

      {/* CATÁLOGO DINÁMICO */}
      {cargando ? (
        <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>Cargando catálogo en tiempo real...</p>
      ) : error ? (
        <p style={{ color: 'var(--accent-red)', textAlign: 'center' }}>{error}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {modelos.map((car) => (
            <div 
              key={car.id} 
              className="contact-item" 
              style={{ 
                flexDirection: 'column', 
                alignItems: 'stretch', 
                backgroundColor: 'var(--card-bg)', 
                padding: '1.5rem', 
                borderRadius: '16px',
                border: '1px solid var(--border-dark)'
              }}
            >
              <img 
                src={car.imagen} 
                alt={car.nombre} 
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} 
              />
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-red)', fontWeight: '700', letterSpacing: '1px' }}>
                {car.precio}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', margin: '0.5rem 0', fontSize: '1.2rem' }}>
                {car.nombre}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: 1, marginBottom: '1.5rem' }}>
                {car.descripcion}
              </p>
              <Link 
                to="/turno" 
                className="btn-submit" 
                style={{ textDecoration: 'none', textAlign: 'center', padding: '0.75rem' }}
              >
                Reservar Cita VIP
              </Link>
            </div>
          ))}
        </div>
      )}

    </main>
  );
}