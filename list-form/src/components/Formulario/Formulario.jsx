// Se pide diseñar al menos cuatro componentes y habrá dos secciones diferenciadas:

// 1. Formulario: 
//   1.1. Input: entrada para un formulario que permita la gestión de datos de tipo texto o de tipo lógico (checkbox).
// Se definirán al menos 3 campos (uno de cada tipo: texto, lógico y selección) y la acción "Añadir". Una vez pulsado "Añadir",
//  los datos se agregarán a la lista en forma de objeto por la cola, y se reseteará el formulario.

import { useState, useId } from "react"
import Input from "../Input/Input"
import Selector from "../Selector/Selector"

function Formulario({setList}){

    const [nombre, setNombre] = useState("")
    const [condiciones, setCondiciones] = useState(false)
    const [selectInfo, setSelectInfo] = useState([])

    const id= useId()

    //   function handleChange(event){
    //     setValue(event.target.value)
    //   }

      // Manejar el envío del formulario
  


    function handleSubmit(event){
        event.preventDefault()
        setList(prevList => [...prevList, {texto: nombre, logico: condiciones, seleccion: selectInfo}])
        

        setNombre ("")
        setCondiciones (false)
        setSelectInfo([])
    }
   
    return(
        <div>
        <form className="form" onSubmit={(event) => handleSubmit(event)} >
            <label htmlFor="nombre">Nombre
                <Input type="text" id={id} name="nombre" value={nombre} setValue={setNombre} />
            </label>
            <label htmlFor="condiciones">¿Aceptas términos y condiciones de uso?
                <Input type="checkbox" id={id} name="condiciones" value={condiciones} setValue={setCondiciones}/>
            </label>
            <Selector selectInfo={setSelectInfo} lista = {selectInfo}/>
            <input type="submit" value="Enviar" />
        </form>
        </div>
    )
}
export default Formulario