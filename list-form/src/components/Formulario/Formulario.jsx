import { useState, useId } from 'react';
import Input from '../Input/Input';
import Selector from '../Selector/Selector';
import './Formulario.css';

function Formulario({ setList }) {
  const [nombre, setNombre] = useState('');
  const [condiciones, setCondiciones] = useState('');
  const [selectInfo, setSelectInfo] = useState([]);

  const id = useId();

  function handleSubmit(event) {
    event.preventDefault();
    setList((prevList) => [
      ...prevList,
      { texto: nombre, logico: condiciones, seleccion: selectInfo },
    ]);
  }
  return (
    <div>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="nombre">
          <p>Nombre</p>
          <Input type="text" id={id} name="nombre" value={nombre} setValue={setNombre} />
        </label>
        <label htmlFor="condiciones">
          <div className="wrapper">
            <div>
              <Input
                type="checkbox"
                id={id}
                name="condiciones"
                value={condiciones}
                setValue={setCondiciones}
              />
            </div>
            <div>
              <p className="conditions">Acepto los términos y condiciones de uso</p>
            </div>
          </div>
        </label>
        <Selector selectInfo={setSelectInfo} lista={selectInfo} />
        <input className="submit-button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Formulario;
