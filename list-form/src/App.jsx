import { useState } from 'react';
import Formulario from './components/Formulario/Formulario';
import Lista from './Lista/Lista';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  return (
    <>
      <Formulario setList={setList}></Formulario>
      <Lista elementos={list} setList={setList} />
    </>
  );
}

export default App;
