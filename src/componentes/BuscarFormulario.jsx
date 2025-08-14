import '../estilos/BuscarFormulario.css'


function BuscarFormulario(){
    return(
        <div className="container-buscar"> 
            <input
            className="input-buscar"
            placeholder="Inserte las medidas" />
            <button
            className="boton-buscar">
                Buscar
            </button>
        </div>
    );
}



export default BuscarFormulario;