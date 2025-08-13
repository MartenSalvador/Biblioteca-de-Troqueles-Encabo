import React from "react";
import '../estilos/Buscar.css';
import BuscarFormulario from "./BuscarFormulario";
import BuscarLista from "./BuscarLista";





function Buscar() {

    
    return (
        <div className="buscar-container">
            <h1 className="buscar-titulo">Buscar Troquel</h1>
            <BuscarFormulario/>
            <BuscarLista/>
        </div>
    );
}



export default Buscar;
