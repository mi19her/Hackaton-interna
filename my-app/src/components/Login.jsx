import React from 'react';
import'../css/stylos.css'

export const Login = () =>{
    return(
        <div>
            <form className="flex">
             <h1>BELCORP</h1>
             <p> Bienvenida a la Compañia de Belleza donde puedes ganar mas¡ </p>
             <input type="text" placeholder= "ingresa tu codigo"/>
             <input type="text" placeholder="ingresa tu contraseña" />
             <button>Ingresar</button>             
            </form>
        </div>
    )
}