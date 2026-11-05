import { useState, useEffect } from 'react';

// Igual que useState, pero el valor sobrevive a recargar la página.
// Si el valor es null, borra la clave.
export default function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const texto = localStorage.getItem(clave);
      return texto ? JSON.parse(texto) : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  useEffect(() => {
    if (valor === null) localStorage.removeItem(clave);
    else localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
}
