import React from 'react';
import '../css/main.css';
import belcorpImg from '../img/img2.jpeg';
import belcorSnrs from '../img/img1.jpeg';

      export const Bienvenida = () => {
           return (
            <section className="login">
            <div className="imag">
              <img className="img"src={belcorpImg} alt=""/>
            </div>
            <div>
              <img src={belcorSnrs} alt=""/>           
            </div>
             </section> 
           )
      }
 