import React from 'react';
import'../css/stylos.css'
import { Link } from 'react-router-dom';
import logo2 from '../img/logo2.jpeg';

export const Login = () =>{

    return(
        <div>
            <Link to="/inicio"><img src={logo2} alt="logo"/></Link>
            <form className="flex">
             <input type="text" placeholder= "ingresa tu codigo"/>
             <input type="text" placeholder="ingresa tu contraseña" />
             <button><Link to="/consultora">INGRESAR</Link></button>    
            </form>
        </div>
    )
}