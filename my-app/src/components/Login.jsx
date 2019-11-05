import React from 'react';
import '../css/main.css'
import {Link} from 'react-router-dom';
import { Form, FormGroup} from 'react-bootstrap';



export const Login = () => {
    return (
         <Form className="login-form">
         <h2 className="mt-4 mb-5"><span className="text-center"> Ingreso </span></h2>
        <FormGroup>
             <label>Código consultora</label>
            <input className="inputs" type="text" />
           </FormGroup>
           <FormGroup>
           <label>Contraseña</label>
               <input className="inputs" type="password" placeholder="Contraseña"/>
       </FormGroup> 
       <p className="text-right " ><a className="text-dark text-reset" href="#">¿Olvidaste tu contraseña?</a></p>
        <button className="color btn-lg btn-block text-white"><Link to="/consultora">INGRESAR</Link></button>
        <p className="mt-4 text-right">¿No tienes cuenta?  <a className="text-dark text-reset" href="#">Regístrate</a></p>
      </Form> 

  
    )
}