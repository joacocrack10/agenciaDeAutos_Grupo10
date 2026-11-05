// Datos de la galería: una marca por sección, cada una con sus modelos.
// Para sumar un modelo: agregar la imagen en src/assets/modelos/, importarla acá
// y agregar el objeto dentro de su marca. Para una marca nueva: agregar otro
// objeto con id, nombre, color (fondo de las filas de datos) y modelos.
// Potencia en CV, aceleración 0-100 km/h en segundos, precio estimado en USD.

import ferrariRoma from '@assets/modelos/ferrari-roma.jpg'
import ferrariLaferrari from '@assets/modelos/ferrari-laferrari.jpg'
import ferrariF40 from '@assets/modelos/ferrari-f40.jpg'
import ferrari296Gtb from '@assets/modelos/ferrari-296-gtb.jpg'
import lamborghiniUrus from '@assets/modelos/lamborghini-urus.jpg'
import lamborghiniAventador from '@assets/modelos/lamborghini-aventador.jpg'
import lamborghiniHuracan from '@assets/modelos/lamborghini-huracan.jpg'
import koenigseggAgera from '@assets/modelos/koenigsegg-agera.jpg'
import koenigseggRegera from '@assets/modelos/koenigsegg-regera.jpg'
import koenigseggGemera from '@assets/modelos/koenigsegg-gemera.jpg'
import porsche911 from '@assets/modelos/porsche-911.jpg'
import mercedesAmgGt63s from '@assets/modelos/mercedes-amg-gt63s.avif'

export const marcas = [
  {
    id: 'ferrari',
    nombre: 'Ferrari',
    color: '#8b0000',
    modelos: [
      {
        id: 'ferrari-roma',
        nombre: 'Ferrari Roma',
        imagen: ferrariRoma,
        motor: 'V8 3.9L Biturbo',
        potencia: 620,
        aceleracion: 3.4,
        traccion: 'Trasera',
        precio: 220_000,
      },
      {
        id: 'ferrari-laferrari',
        nombre: 'Ferrari LaFerrari',
        imagen: ferrariLaferrari,
        motor: 'V12 6.3L Híbrido',
        potencia: 963,
        aceleracion: 2.6,
        traccion: 'Trasera',
        precio: 4_200_000,
      },
      {
        id: 'ferrari-f40',
        nombre: 'Ferrari F40',
        imagen: ferrariF40,
        motor: 'V8 2.9L Biturbo',
        potencia: 478,
        aceleracion: 4.1,
        traccion: 'Trasera',
        precio: 3_000_000,
      },
      {
        id: 'ferrari-296-gtb',
        nombre: 'Ferrari 296 GTB',
        imagen: ferrari296Gtb,
        motor: 'V6 3.0L Híbrido',
        potencia: 830,
        aceleracion: 2.9,
        traccion: 'Trasera',
        precio: 320_000,
      },
    ],
  },
  {
    id: 'lamborghini',
    nombre: 'Lamborghini',
    color: '#064d2a',
    modelos: [
      {
        id: 'lamborghini-urus',
        nombre: 'Lamborghini Urus',
        imagen: lamborghiniUrus,
        motor: 'V8 4.0L Biturbo',
        potencia: 666,
        aceleracion: 3.5,
        traccion: 'Integral',
        precio: 240_000,
      },
      {
        id: 'lamborghini-aventador',
        nombre: 'Lamborghini Aventador',
        imagen: lamborghiniAventador,
        motor: 'V12 6.5L Atmosférico',
        potencia: 770,
        aceleracion: 2.8,
        traccion: 'Integral',
        precio: 520_000,
      },
      {
        id: 'lamborghini-huracan',
        nombre: 'Lamborghini Huracán',
        imagen: lamborghiniHuracan,
        motor: 'V10 5.2L Atmosférico',
        potencia: 640,
        aceleracion: 2.9,
        traccion: 'Integral',
        precio: 260_000,
      },
    ],
  },
  {
    id: 'koenigsegg',
    nombre: 'Koenigsegg',
    color: '#003366',
    modelos: [
      {
        id: 'koenigsegg-agera',
        nombre: 'Koenigsegg Agera',
        imagen: koenigseggAgera,
        motor: 'V8 5.0L Biturbo',
        potencia: 960,
        aceleracion: 3.0,
        traccion: 'Trasera',
        precio: 2_000_000,
      },
      {
        id: 'koenigsegg-regera',
        nombre: 'Koenigsegg Regera',
        imagen: koenigseggRegera,
        motor: 'V8 5.0L Biturbo Híbrido',
        potencia: 1500,
        aceleracion: 2.8,
        traccion: 'Trasera',
        precio: 2_600_000,
      },
      {
        id: 'koenigsegg-gemera',
        nombre: 'Koenigsegg Gemera',
        imagen: koenigseggGemera,
        motor: 'V8 5.0L Biturbo Híbrido',
        potencia: 2300,
        aceleracion: 1.9,
        traccion: 'Integral',
        precio: 2_100_000,
      },
    ],
  },
  {
    id: 'porsche',
    nombre: 'Porsche',
    color: '#7a5a00',
    modelos: [
      {
        id: 'porsche-911',
        nombre: 'Porsche 911',
        imagen: porsche911,
        motor: 'Flat-6 3.0L Biturbo',
        potencia: 480,
        aceleracion: 3.4,
        traccion: 'Trasera',
        precio: 130_000,
      },
    ],
  },
  {
    id: 'mercedes',
    nombre: 'Mercedes-AMG',
    color: '#3d4248',
    modelos: [
      {
        id: 'mercedes-amg-gt63s',
        nombre: 'Mercedes-AMG GT 63 S',
        imagen: mercedesAmgGt63s,
        motor: 'V8 4.0L Biturbo',
        potencia: 639,
        aceleracion: 3.2,
        traccion: 'Integral 4MATIC+',
        precio: 180_000,
      },
    ],
  },
]

// 220000 -> "$220,000"
export const formatearPrecio = (precio) => `$${precio.toLocaleString('en-US')}`
