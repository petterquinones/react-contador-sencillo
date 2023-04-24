import React, { useState } from 'react';

import logo from "./assets/freecodecamp-logo.png";
import Boton from "./components/boton";
import Contador from "./components/Contador";

import "./App.css";


function App() {
  const [contador, setContador] = useState(0);

  const manejarClick = ()=>{
    setContador(contador+1);
  }

  const reiniciarContador=()=>{
    setContador(0);
  }

  return (
    <div className="app">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="logo de freecodecamp"
        />
      </div>
     
      <div className="contenedor-principal">
      <Contador numClics={contador}/>
        <Boton
          texto="click"
          esBotonClic={true}
          manejadorClic={manejarClick}/>
        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejadorClic={reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
