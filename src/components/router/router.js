import React from 'react';
import Paginainicio from '../paginainicio/paginainicio';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";



export default function AppRouter() {
    return (
   
      <Router>
      <Switch>
      <Route exact path={["/"]} component={Paginainicio} />
      </Switch>
     </Router>

    );
  }

