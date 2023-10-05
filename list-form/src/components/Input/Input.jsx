// 1. Formulario: 
//   1.1. Input: entrada para un formulario que permita la gestión de datos de tipo texto o de tipo lógico (checkbox).
// Se definirán al menos 3 campos (uno de cada tipo: texto, lógico y selección) y la acción "Añadir". Una vez pulsado "Añadir",
//  los datos se agregarán a la lista en forma de objeto por la cola, y se reseteará el formulario.


import {useRef} from "react";

// export default 
function Input({type ="text", setValue, value}){
    
    function handleChange(event){
        if (type == "text"){
            setValue(event.target.value)
        } else {
            setValue(event.target.checked)
        }
    }
    return(
        <div>
            <input type={type} onChange={handleChange} checked={type === "checkbox" ? value : undefined} value={value}/>
        </div>
    
    )
}
export default Input