import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Home } from '../screens';


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
        <Route
            exact
            path="/"
            component={Home}
          />
        </Switch>
      </div>
    </Router>
  )
}
