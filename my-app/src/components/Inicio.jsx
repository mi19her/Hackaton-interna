import React from "react";
import { Link } from "react-router-dom";
import "../css/stylos.css";
import { Header } from "../components/Header";
import catalogo from "../img/catalogo.jpeg";
import compartir from "../img/compartir.png";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 25,
    };
  }

  clickHandler() {
    this.setState({
      progress: this.state.progress < 100 ? this.state.progress + 5 : 100,
    });
  }

  render() {
    var progress = {
      width: this.state.progress + "%",
    };

    return (
      <div>
        <div className="shell">
          <div className="bar" style={progress}>
            <span className="color"></span>
          </div>
          <p>{this.state.progress + "00"}</p>
        </div>
        {/* <button onClick={ this.clickHandler.bind(this) }>+</button> */}
      </div>
    );
  }
}
export const Inicio = ({ click }) => {
  return (
    <div className="flex">
      <Header />
      <div className="cat">
        <p>Gana mas puntos para llegar al siguiente Nivel</p>
        <ProgressBar />
      </div>
      <div className="cat">
        <h5>TIENDA VIRTUAL</h5>
        <img className="cat17" src={catalogo} alt="catalogo" />
        <button className="compart" onClick={click}>
          <Link to="https://issuu.com/somosbelcorp/docs/lbel.peru.c17.2018?mode=embed"></Link>
          <img src={compartir} alt="icon"></img> COMPARTIR
        </button>
      </div>
    </div>
  );
};
