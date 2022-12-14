
import React from 'react';
import './App.css';
import { Boton } from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Valores from './componentes/Valores';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {

    setInput (input + val);
  } ;

  const calcularResultado = () => {
    if (input) {
      setInput (evaluate(input))
    } else {
      alert("para realizar un cálculo ingrega un valor")
    }
    
  };

  return (
    <div className='App'>
      <header>
        <h1 className='titulo'> Mi Calculadora </h1>
      </header>
      <div className='contenedorCalculadora'>
        <Valores input = {input}/>
        {/*primer input es  props y el segundo es el valor del estado */}
        <div className='fila'>
          {/* props + los q esta en parentesis es el llamado a la funcion */}
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
  
      
    </div>
  );
}

export default App;
