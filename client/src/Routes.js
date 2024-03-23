import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Visible } from "react-grid-system";
import Room from "./components/Room/Room";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./components/common/Footer";
import Topbar from "./components/common/Topbar";

function Routes() {
  return (
    <Router>
      <Topbar />
      <div style={{ minHeight: "80vh" , minWidth: "100vw"}}>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/room/:id" component={Room} exact />
        </Switch>
        <Visible xs>
          <div style={{ marginBottom: "48px"}}></div>
        </Visible>
      </div>
      <Footer />
    </Router>
  );
}

export default Routes;
