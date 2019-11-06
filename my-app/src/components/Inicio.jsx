import React from 'react';
import { Link } from 'react-router-dom';
import'../css/stylos.css'


class ProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        progress: 25
      };
    }
    
    clickHandler() {
      this.setState({
        progress: this.state.progress < 100 ? this.state.progress + 5 : 100
      });
    }
    
    render() {
      var progress = {
        width: this.state.progress + "%"
      }
      
      return (
        <div>
          <div className="shell">
            <div className="bar" style={ progress }><span className='color'></span></div>
            <p>{ this.state.progress + "00" }</p>
          </div>
        </div>
      )
    }
  }

export const Inicio = () =>{

    return(
        <div className="flex">
            <p>Gana mas puntos para llegar al siguiente Nivel</p>
            <ProgressBar/>
            <div className="flex"> 
                <p>TIENDA VIRTUAL</p>
                <button className="compart" >COMPARTIR
                <Link to="https://issuu.com/somosbelcorp/docs/lbel.peru.c17.2018?mode=embed"></Link>    
                </button>
            </div>
         </div>
    )
}