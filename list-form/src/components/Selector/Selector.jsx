import { useState } from 'react';
import './Selector.css';

function Selector({ selectInfo }) {
  const opciones = ['Madrid', 'Barcelona', 'Alicante', 'Valencia'];
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(
    'Haz click aquí para desplegar la lista'
  );
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);
  const [desplegado, setDesplegado] = useState(false);

  const handleCambiarOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
    setDesplegado(false); // Cierra el desplegable cuando se selecciona una opción
  };

  const agregarOpcion = () => {
    if (!opcionesSeleccionadas.includes(opcionSeleccionada)) {
      setOpcionesSeleccionadas((prevOpciones) => [...prevOpciones, opcionSeleccionada]);
      selectInfo((prevOpciones) => [...prevOpciones, opcionSeleccionada]);
    }
  };

  const toggleDesplegable = () => {
    setDesplegado(!desplegado);
  };

  return (
    <div>
      <label> ¿De dónde eres? Selecciona una opción: </label>
      <div className="selector-personalizado">
        <div
          className={`opcion seleccionada ${desplegado ? 'desplegado' : ''}`}
          onClick={toggleDesplegable}
        >
          {opcionSeleccionada}
        </div>
        {desplegado && (
          <div className="opciones-desplegable">
            {opciones.map((opcion) => (
              <div
                key={opcion}
                className={`opcion ${opcionSeleccionada === opcion ? 'seleccionada' : ''}`}
                onClick={() => handleCambiarOpcion(opcion)}
              >
                {opcion}
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={agregarOpcion}>Agregar a la lista</button>
      <p>La opción seleccionada es: {opcionSeleccionada}</p>
      <p>Opciones seleccionadas:</p>
      <ul>
        {opcionesSeleccionadas.map((opcion, index) => (
          <li key={index}>{opcion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Selector;
