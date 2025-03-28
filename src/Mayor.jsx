import {useState} from "react"

function Mayor (){
    const [numero, setNumero] = useState ("");
    const [esMayor,setMayor]= useState (null);

    function verificarNum (){
        const num = parseInt (numero)
             if (!isNaN(num)) {
                setMayor (num > 10);
             } else {
                setMayor (null);
             }
        }

        return (

            <div>
                <h2>Comprobar si es mayor de 10</h2>

                <input type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Ingrese un número" 
                />

                <button onClick={verificarNum}>Verificar</button>
                 {
                    esMayor !== null && (
                        <h3>{esMayor ? "El numero es mayor a 10" : "El numero no es mayor a 10"}</h3>
                    )
                 }
            </div>
        );
    }
export default Mayor;
