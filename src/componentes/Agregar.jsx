import '../estilos/Agregar.css';
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

function Agregar() {
    


    const [tipoTroquel, setTipoTroquel] = useState('rectangular');
    const [rectangular, setRectangular] = useState({ base: '', altura: '' });
    const [trapecial, setTrapecial] = useState({ baseMayor: '', baseMenor: '', altura: '' });
    const [uso, setUso] = useState('');
    const [guardado, setGuardado] = useState('');

    const handleTipoChange = (e) => setTipoTroquel(e.target.value);

    const handleRectangularChange = (e) => {
        setRectangular({ ...rectangular, [e.target.name]: e.target.value });
    };

    const handleTrapecialChange = (e) => {
        setTrapecial({ ...trapecial, [e.target.name]: e.target.value });
    };

    const handleGuardar = async() => {
        let datos;
        if (tipoTroquel === 'rectangular') {
            datos = { tipo: 'rectangular', ...rectangular, uso, guardado };
        } else {
            datos = { tipo: 'trapecial', ...trapecial, uso, guardado };
        }

        try{
            await addDoc(collection(db, "troqueles"), datos);
            alert ("Troquel guardado en Firebase");
        } catch(error){
            alert("Error al guardar: "+ error.mesage);
        }
    };
    

    return (
        <div className="agregar-container">
            <h1>Agregar Nuevo Troquel</h1>
            <label htmlFor="tipoTroquel">Tipo de Troquel:</label>
            <select
                className="select-buscar"
                id="tipoTroquel"
                value={tipoTroquel}
                onChange={handleTipoChange}
            >
                <option value="rectangular">Rectangular</option>
                <option value="trapecial">Trapecial</option>
            </select>
            {tipoTroquel === 'rectangular' && (
                <div>
                    <input
                        type="number"
                        name="base"
                        value={rectangular.base}
                        onChange={handleRectangularChange}
                        placeholder="Base (mm)"
                    />
                    <input
                        type="number"
                        name="altura"
                        value={rectangular.altura}
                        onChange={handleRectangularChange}
                        placeholder="Altura (mm)"
                    />
                </div>
            )}
            {tipoTroquel === 'trapecial' && (
                <div>
                    <input
                        type="number"
                        name="baseMayor"
                        value={trapecial.baseMayor}
                        onChange={handleTrapecialChange}
                        placeholder="Base Mayor (mm)"
                    />
                    <input
                        type="number"
                        name="baseMenor"
                        value={trapecial.baseMenor}
                        onChange={handleTrapecialChange}
                        placeholder="Base Menor (mm)"
                    />
                    <input
                        type="number"
                        name="altura"
                        value={trapecial.altura}
                        onChange={handleTrapecialChange}
                        placeholder="Altura (mm)"
                    />
                </div>
            )}
            <input
                type="text"
                value={uso}
                onChange={e => setUso(e.target.value)}
                placeholder="Uso de troquel"
            />
            <input
                type="text"
                value={guardado}
                onChange={e => setGuardado(e.target.value)}
                placeholder="Ubicación donde se guarda el troquel"
            />
            <button onClick={handleGuardar}>Guardar</button>
        </div>
    );
}   

export default Agregar;