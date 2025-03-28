
import {useState} from "react";

function Texto(){
    const [texto1, cambiarTexto1] = useState ("Arriba");
    const [texto2, cambiarTexto2] = useState ("Las");
    const [texto3, cambiarTexto3] = useState ("Manos");

    function cambiarTextos(){
        cambiarTexto1("Abajo");
        cambiarTexto2("Los");
        cambiarTexto3("Pantalones");
    }

    return (
        <div>
            <h2>{texto1}</h2>
            <h2>{texto2}</h2>
            <h2>{texto3}</h2>
    
            <button onClick={cambiarTextos}> Cambiar Textos </button>
        </div>
    );
}

export default Texto;


