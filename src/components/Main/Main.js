import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Cotacao from '../../pages/Cotacao';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cotacao' component={Cotacao}/>
    </Switch>
  </div>
)

export default Main;