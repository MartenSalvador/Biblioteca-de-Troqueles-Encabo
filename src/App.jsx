
import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './componentes/Nav.jsx';
import Header from './componentes/Header.jsx';
import Buscar from './componentes/Buscar.jsx';
import Agregar from './componentes/Agregar.jsx';

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Buscar/>} />
        <Route path="/Agregar" element={<Agregar/>} />
        
      </Routes>
      <footer>
        <p>&copy; 2023 Biblioteca de Troqueles</p>
      </footer>
    </div>
  )
}

export default App
