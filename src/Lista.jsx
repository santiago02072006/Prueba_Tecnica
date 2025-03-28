import { useState } from "react";

function Lista() {
  const [momento, setMomento] = useState(["Noche", "Día", "Tarde", "Mañana"]);
  const [mostrar, setMostrar] = useState(false); // Estado para mostrar u ocultar la lista

  return (
    <div>
      <h3>Lista de Momentos del Día</h3>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Lista" : "Mostrar Lista"}
      </button>

      {mostrar && (
        <ul>
          {momento.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;
