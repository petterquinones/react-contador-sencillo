import React from "react";
import "../style/boton.css";

const Boton = ({ texto, esBotonClic, manejadorClic }) => {
  return (
    <button
      className={esBotonClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejadorClic}
    >
      {texto}
    </button>
  );
};

export default Boton;
