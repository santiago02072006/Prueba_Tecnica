import { useState } from "react";

function MostrarObjeto() {
    // Definir el objeto con información
    const [usuario, setUsuario] = useState({
        nombre: "Cristian Burgos",
        edad: 18,
        ciudad: "Bogotá"
    });

    // Estado para controlar si se muestra o no el objeto
    const [mostrar, setMostrar] = useState(false);

    return (
        <div>
            <h2>Información del Usuario</h2>
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "Ocultar Datos" : "Mostrar Datos"}
            </button>

            {mostrar && (
                <div>
                    <p><strong>Nombre:</strong> {usuario.nombre}</p>
                    <p><strong>Edad:</strong> {usuario.edad}</p>
                    <p><strong>Ciudad:</strong> {usuario.ciudad}</p>
                </div>
            )}
        </div>
    );
}

export default MostrarObjeto;
