import React from 'react';
import '../css/main.css';
import belcorpImg from '../img/img2.jpeg';
import belcorSnrs from '../img/img1.jpeg';
// import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

      export const Bienvenida = () => {
           return (
             
            <div className="login">
            <div className="imag">
              <img className="img"src={belcorpImg} alt=""/>
            </div>
            <div>
              <img src={belcorSnrs} alt=""/>
            
            </div>
            <button><Link to="/login">Next</Link></button>
             </div> 
           )
      }
 