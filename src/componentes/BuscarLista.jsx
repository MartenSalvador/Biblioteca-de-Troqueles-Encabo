import React from "react";
import '../estilos/BuscarLista.css'



function BuscarLista({ troqueles =[] }){
    if (!troqueles || troqueles.length === 0) {
    return <p>No hay resultados.</p>;
  }
    return(
        <ul className="ul-lista">
            {troqueles.map(troquel => (
                <li className="li-lista"
                    key={troquel.id}>
                    {troquel.tipo === "rectangular"
                        ? `${troquel.base}x${troquel.altura}`
                        : `${troquel.baseMayor}x${troquel.baseMenor}x${troquel.altura}`
                }
                {" - Uso: "}{troquel.uso}{" - Guardado: "}{troquel.guardado}
                </li>
            ))}
        </ul>
    );
}




export default BuscarLista;