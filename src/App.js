import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HR from './Container/HR/HR';
import Finance from './Container/Finance/Finance';
import Login from './Container/Login/Login';
import Inventory from './Container/Inventory/Inventory';
import Settings from './Container/Settings/Settings';

class App extends Component {

  render() {
  return (
      <div className="App">
      
      <Switch>
        <Route path="/admin/dashboard" component={HR} />
        <Route path="/finance" exact component={Finance} />
        <Route path="/inventory" exact component={Inventory} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/" exact component={Login} />
      </Switch>
      
      </div>
    );
  }
  

}

export default App;
