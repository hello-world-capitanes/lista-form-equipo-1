import './Modal.css';

const Modal = ({ info, isModalActive, setIsModalActive }) => {
  if (!isModalActive) {
    return;
  }

  return (
    <div className="backdrop">
      <div className="modal">
        <h1>INFORMACIÓN</h1>
        <p>{info.texto}</p>
        <p>{info.logico}</p>
        <p>{info.seleccion}</p>
        <button onClick={() => setIsModalActive(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
