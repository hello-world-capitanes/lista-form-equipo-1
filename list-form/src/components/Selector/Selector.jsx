import { useState } from 'react';
import './Selector.css';

function Selector({ selectInfo, lista }) {
  const opciones = ['Madrid', 'Barcelona', 'Alicante', 'Valencia'];
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(
    'Haz click aquí para desplegar la lista'
  );
  //const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);
  const [desplegado, setDesplegado] = useState(false);

  const handleCambiarOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
    setDesplegado(false); // Cierra el desplegable cuando se selecciona una opción
  };

  const agregarOpcion = () => {
    if (!lista.includes(opcionSeleccionada)) {
      //setOpcionesSeleccionadas((prevOpciones) => [...prevOpciones, opcionSeleccionada]);
      selectInfo((prevOpciones) => [...prevOpciones, opcionSeleccionada]);
    }
  };

  const toggleDesplegable = () => {
    setDesplegado(!desplegado);
  };

  return (
    <div>
      <label>👇 ¿De dónde eres? Selecciona una opción 👇</label>
      <div className="selector-personalizado">
        <div
          className={`opcion seleccionada ${desplegado ? 'desplegado' : ''}`}
          onClick={toggleDesplegable}
        >
          <p className="option-selector">{opcionSeleccionada}</p>
        </div>
        {desplegado && (
          <div className="opciones-desplegable">
            {opciones.map((opcion) => (
              <div
                key={opcion}
                className={`opcion ${opcionSeleccionada === opcion ? 'seleccionada' : ''}`}
                onClick={() => handleCambiarOpcion(opcion)}
                className="list-selection"
              >
                {opcion}
              </div>
            ))}
          </div>
        )}
      </div>
      <button type="button" onClick={agregarOpcion}>
        Agregar a la lista
      </button>
      <p>La opción seleccionada es: {opcionSeleccionada}</p>
      <p>Opciones seleccionadas:</p>
      <ul>
        {lista.map((opcion, index) => (
          <li key={index}>{opcion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Selector;
