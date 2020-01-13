import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/app-header.component";
import { Route, Switch } from "react-router-dom";
import Tasks from "./pages/tasks/tasks.component";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
