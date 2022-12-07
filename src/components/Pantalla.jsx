import React from "react";
import "../styles/Pantalla.css";

/*Otra forma de definir un componente es usando la funcion flecha. Esto lo hacemos cuando es un componente pequeño y que no retorna muchos elementos de HTML */
const Pantalla = ({ input }) => (
  <div className="input">
    {input}
  </div>
)

export default Pantalla;