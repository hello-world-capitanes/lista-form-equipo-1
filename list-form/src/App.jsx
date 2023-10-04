import { useState } from 'react';
import './App.css';
import Lista from './Lista/Lista';

function App() {
  const [list, setList] = useState([
    { texto: 'Primero', logico: 'Si', seleccion: 'A' },
    { texto: 'Segund', logico: 'Siqdwqwd', seleccion: 'B' },
    { texto: 'Tercero', logico: 'Siqwdqd', seleccion: 'C' },
    { texto: 'Cuarto', logico: 'Siyht', seleccion: 'D' },
  ]);

  return (
    <>
      <Lista elementos={list} setList={setList} />
    </>
  );
}

export default App;
