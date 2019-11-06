import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login} from './components/Login';
import { Inicio} from './components/Inicio';
import {LinkCatalogo} from './components/LinkCatalogo';
import { Consultora } from './views/Consultora'

export const RouteHack = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/consultora">
          <Consultora />
        </Route>
       <Route path="/">
          <Login/>
        </Route>
        <Route path="/inicio">
          <Inicio />
        </Route>
       <Route path="/link">
          <LinkCatalogo />
        </Route>
      </Switch>
    </Router>
  );
};
