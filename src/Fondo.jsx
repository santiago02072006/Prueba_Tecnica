import React from "react";

function Fondo() {
    
    console.log("Renderizando Clase.jsx");

  function cambiarColor() {
    document.body.classList.toggle("rojo");
  }

  return (
    <div>
      <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
  );
}

export default Fondo;