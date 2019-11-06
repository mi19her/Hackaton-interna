import React from 'react';
import './Drawer.css';
const Drawer = props => {
  let drawerClasess = 'side-drawer';

  return(
    <nav className={drawerClasess}>
      <ul>
        <li><a href="#/">Inicio</a></li>
        <li><a href="#/">Mi Cuenta</a></li>
        <li><a href="#/">Mis pedidos</a></li>
        <li><a href="#/">Mis Puntos</a></li>
        <li><a href="#/">Configuración</a></li>
      </ul>
    </nav>
  )
}
export default Drawer