import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from './Lista/Lista'
import Modal from './components/Modal/Modal';

function App() {
  const [list, setList] = useState([
    {texto: "Primero",
    logico: "Si",
    seleccion:"A"},
    {texto: "Segund",
    logico: "Siqdwqwd",
    seleccion:"B"},
    {texto: "Tercero",
    logico: "Siqwdqd",
    seleccion:"C"},
    {texto: "Cuarto",
    logico: "Siyht",
    seleccion:"D"},
  ])
  
  const info = {
    texto: 'Texto',
    logico: 'Logico',
    seleccion: 'Seleccion',
  };
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <>
      <Lista elementos={list} setList={setList}/>
      <Modal info={info} isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
    </>
  );
}

export default App;
