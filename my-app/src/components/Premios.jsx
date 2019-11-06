import React from "react";
import "../css/stylos.css";
import canasta from "../img/canastaficha.png";
import pavo from "../img/pavito.png";
import platos from "../img/platos.png";

export const Premios = () => {
  return (
    <div className="divprod">
      <div className="vistaproduct">
        <img className="catalogo" src={canasta} alt="canasta navideña" />
        <p>Nivel 1</p>
        <p>Canasta</p>
        <p>Navideña</p>
      </div>
      <div className="vistaproduct">
        <img className="catalogo" src={pavo} alt="pavo" />
        <p>Nivel 2</p>
        <p>Vale</p>
        <p>Pavo</p>
      </div>
      <div className="vistaproduct">
        <img className="catalogo" src={platos} alt="platos" />
        <p>Nivel 3</p>
        <p>Vajilla</p>
        <p>Navideña</p>
      </div>
    </div>
  );
};
