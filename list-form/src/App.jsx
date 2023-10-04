import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [isModalActive, setIsModalActive] = useState(false);

  const info = {
    texto: 'Texto',
    logico: 'Logico',
    seleccion: 'Seleccion',
  };

  return (
    <>
      <button onClick={() => setIsModalActive(!isModalActive)}>Toogle modal</button>
      <Modal info={info} isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
    </>
  );
}

export default App;
