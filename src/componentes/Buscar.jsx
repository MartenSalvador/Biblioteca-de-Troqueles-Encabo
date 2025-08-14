import { useState } from 'react';
import '../estilos/Buscar.css';
import BuscarFormulario from "./BuscarFormulario";
import BuscarLista from "./BuscarLista";
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Buscar() {
  const [troqueles, setTroqueles] = useState([]);

  const buscarTroquelesPorMedida = async (medidaBuscada) => {
    const troquelesRef = collection(db, "troqueles");
    const querySnapshot = await getDocs(troquelesRef);

    const resultados = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (
        String(data.base) === medidaBuscada ||
        String(data.altura) === medidaBuscada ||
        String(data.baseMayor) === medidaBuscada ||
        String(data.baseMenor) === medidaBuscada
      ) {
        resultados.push({ id: doc.id, ...data });
      }
    });
    setTroqueles(resultados);
  };

  return (
    <div className="buscar-container">
      <h1 className="buscar-titulo">Buscar Troquel</h1>
      <BuscarFormulario onBuscar={buscarTroquelesPorMedida} />
      <BuscarLista troqueles={troqueles} />
    </div>
  );
}

export default Buscar;