import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Login, Register } from "../screens";

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/registro" component={Register} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  )
}
