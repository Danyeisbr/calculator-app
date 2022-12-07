import './App.css';
import logo from './images/bootstrap-logo.png';
import Boton  from './components/Boton.jsx';
import Pantalla from './components/Pantalla.jsx';
import BotonClear from './components/BotonClear.jsx';
import { useState } from 'react';
//npm install mathjs para instalar el paquete que hará los calculos
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor);
  };

  // Otra opcion para el boton clear es definir esta funcion aca
  // const clearInput = function () {
  //   setInput("");
  // };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingrese un valor válido");
    }
  };

  return (
    <div className="App">
      <div className="container-logo">
        <img
          className="bootstrap-logo"
          src={logo}
          alt="Logo de bootstrap" 
        />
      </div>
      <div className="container-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear limpiarPantalla={ ()=> setInput("") } > Clear </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
