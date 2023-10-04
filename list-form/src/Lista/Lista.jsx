import { useState } from 'react'
import Button from '../Button/Button'
import './index.css'

function Lista({elementos, setList}) {
    const [isModalActive, setIsModalActive] = useState(false)

    function handleRemove(index) {
        setList(prevList => {
            const copy = [...prevList]
            copy.splice(index, 1)
            return copy
        })
    }

    function handleUpDown(index, upDown) {
        const suma = upDown  ? -1 : 1
        setList(prevList => {
            const copy= [...prevList]
            const aux = copy[index+suma]
            copy[index+suma] = copy[index]
            copy[index] = aux
            return copy
        })
    }
    function handleSelect() {
        setIsModalActive(true)
    }
    return (
        <ul className='lista-div'>
            {   
                elementos.map((item, index) => 
                    <li className="list-ele" key={`${item.texto}${item.logico}`} onDoubleClick={() => handleSelect()}>
                        {item.texto}
                        <Button className="button" onClick={() => handleRemove(index)} text="Delete"/>
                        {!(index==elementos.length-1)  && <Button className="button" onClick={() => handleUpDown(index, true)} text="Up"/>}
                        {!(index==0) && <Button className="button" onClick={() =>handleUpDown(index, false)} text="Down"/>}
                        <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>
                    </li>
                )
            }
        </ul>
    )
}

export default Lista
