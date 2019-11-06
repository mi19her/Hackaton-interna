import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login} from './components/Login';
import { Inicio} from './components/Inicio';
import {LinkCatalogo} from './components/LinkCatalogo';

import {Ciclos} from './components/Ciclos';
import { Consultora } from './views/Consultora'
import {Bienvenida} from './components/Bienvenida'
import {Notificacion} from './components/Notificacion'
export const RouteHack = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/notificacion">
          <Notificacion />
        </Route>
      <Route path="/consultora">
          <Consultora />
        </Route>
      <Route path="/login">
          <Login/>
        </Route>
      <Route path="/">
      <Bienvenida />
        </Route>
     
        <Route path="/inicio">
          <Inicio />
        </Route>
       <Route path="/link">
          <LinkCatalogo />
        </Route>
        {/* <Route path="/nuevo">
          <NuevoPedido />
        </Route> */}
       <Route path="/ciclos">
          <Ciclos />
        </Route> 
        
      </Switch>
    </Router>
  );
};
