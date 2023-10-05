import './Modal.css';

const Modal = ({ info, isModalActive, setIsModalActive }) => {
  if (!isModalActive) {
    return;
  }

  return (
    <div className="backdrop">
      <div className="modal">
        <h1>INFORMACIÓN</h1>
        <p className="p-modal">{info.texto}</p>
        <p className="p-modal">
          {info.logico ? 'acepto condiciones' : 'no acepta las condiciones'}
        </p>
        <p className="p-modal">{info.seleccion}</p>
        <button onClick={() => setIsModalActive(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
