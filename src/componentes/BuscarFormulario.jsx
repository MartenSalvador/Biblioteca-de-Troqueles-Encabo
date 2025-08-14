import React, { useState } from 'react';
import '../estilos/BuscarFormulario.css';

function BuscarFormulario({ onBuscar }) {
  const [medida, setMedida] = useState('');

  const handleInputChange = (e) => setMedida(e.target.value);

  const handleBuscarClick = () => {
    onBuscar(medida); // Llama a la función que busca en Firebase
  };

  return (
    <div className="container-buscar">
      <input
        className="input-buscar"
        placeholder="Inserte las medidas"
        value={medida}
        onChange={handleInputChange}
      />
      <button className="boton-buscar" onClick={handleBuscarClick}>
        Buscar
      </button>
    </div>
  );
}

export default BuscarFormulario;