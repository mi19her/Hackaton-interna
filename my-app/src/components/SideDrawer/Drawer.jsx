import React from 'react';
import './Drawer.css';
import {Link} from 'react-router-dom';
const Drawer = () => {
  let drawerClasess = 'side-drawer';
 

  return(
    <nav className={drawerClasess}>
      <ul>
        <li><a href="#/">Inicio</a></li>
        <li><a href="#/">Mi Cuenta</a></li>
        <li><Link to="/notificacion">Mis pedidos</Link></li>
        <li><a href="#/">Mis Puntos</a></li>
        <li><a href="#/">Configuración</a></li>
      </ul>
    </nav>
  )
}
export default Drawer