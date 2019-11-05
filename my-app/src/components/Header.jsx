import React from 'react';
import { Link } from 'react-router-dom';
import '../css/stylos.css';

export const Header = () => {
  return (
    <header className='header'>
      <h1>Hola Sara</h1>
      <nav>
          <ul>
              <li><Link to="/inicio">Inicio</Link></li>
              <li><Link to="/link">Mi cuenta</Link></li>
              <li><Link to="/nuevo">Mis pedidos</Link></li>
              <li><Link to="/ciclos">Mis puntos</Link></li>
              <li>Configuracion</li>

          </ul>
      </nav>
    </header>
  );
};