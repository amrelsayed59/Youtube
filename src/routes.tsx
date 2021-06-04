import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./modules/main";






const Routes: React.SFC = () => (
  <BrowserRouter>
  <Switch>
      <Route  component={Main} path="/" exact/>


      </Switch>
      </BrowserRouter>
    

)

export default Routes