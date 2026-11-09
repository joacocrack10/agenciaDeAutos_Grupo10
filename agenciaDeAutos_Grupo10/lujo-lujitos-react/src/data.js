// dia: 0 = domingo ... 6 = sábado. desde/hasta: hora de 0 a 23
export const horarios = [
  { id: 1, dia: 1, diaTexto: 'Lunes', desde: 9, hasta: 19, atencion: 'Showroom abierto' },
  { id: 2, dia: 2, diaTexto: 'Martes', desde: 9, hasta: 19, atencion: 'Showroom abierto' },
  { id: 3, dia: 3, diaTexto: 'Miércoles', desde: 9, hasta: 19, atencion: 'Showroom abierto' },
  { id: 4, dia: 4, diaTexto: 'Jueves', desde: 9, hasta: 19, atencion: 'Showroom abierto' },
  { id: 5, dia: 5, diaTexto: 'Viernes', desde: 9, hasta: 19, atencion: 'Showroom abierto' },
  { id: 6, dia: 6, diaTexto: 'Sábado', desde: 10, hasta: 14, atencion: 'Solo con cita previa' },
];

export const autos = [
  {
    id: 1, marca: 'PORSCHE', modelo: '911', imagen: '/pexels-thekameragrapher-33621659.jpg',
    specs: [['Motor', '3.0L Flat-6 Twin-Turbo'], ['Potencia', '480 HP'], ['0-100 km/h', '3.4 Segundos'], ['Transmisión', '8-Vel PDK']],
    precio: '$130,000',
  },
  {
    id: 2, marca: 'MERCEDES-AMG', modelo: 'GT 63 S', imagen: '/mercedes_amg.avif',
    specs: [['Motor', 'V8 4.0L Biturbo'], ['Potencia', '630 HP'], ['0-100 km/h', '3.2 Segundos'], ['Tracción', '4MATIC+']],
    precio: '$180,000',
  },
  {
    id: 3, marca: 'FERRARI', modelo: '296 GTB', imagen: '/Ferrari_296_GTB_1X7A6379.jpg',
    specs: [['Motor', 'V6 3.0L Híbrido'], ['Potencia', '830 HP'], ['0-100 km/h', '2.9 Segundos'], ['Capacidad', '2 Pasajeros']],
    precio: '$320,000',
  },
];

export const beneficios = [
  { id: 1, titulo: 'Atelier de Customización', imagen: '/Porsche_911_Turbo_S_Exclusive_Series_IMG_3750.jpg',
    texto: 'Diseña cada detalle a la medida. Desde cueros a mano de la Toscana hasta inserciones de fibra de carbono personalizadas con metales preciosos.' },
  { id: 2, titulo: 'Acceso a Track Days', imagen: '/rolls_royce_phantom.jpg',
    texto: 'Al adquirir un modelo de nuestra firma, recibe membresía vitalicia en clubes de carreras privadas en Europa y Norteamérica.' },
  { id: 3, titulo: 'Conserjería y Garantía', imagen: '/Lamborghini_Revuelto.jpg',
    texto: 'Garantía de por vida en componentes mecánicos esenciales y asistencia de conserjería VIP 24/7 en cualquier carretera o circuito del mundo.' },
];
