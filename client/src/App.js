import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/MainPage";
import AddBadDriver from "./pages/AddBadDriver";
import login from "./pages/login";
import geoLocation from "./components/geoLocation";

// import logout from "./pages/logout";
import Detail from "./pages/Comment";
import NoMatch from "./pages/NoMatch";
import PersistentDrawerLeft from "./components/Nav";
import './App.css';




function App() {
  return (
    <Router>
      <div className="bg">
        <PersistentDrawerLeft />
        {/* <geoLocation/> */}
        <Switch>
          <Route exact path="/login" component={login} />
          {/* <Route exact path="/logout" component={logout} /> */}
          {/* <Route exact path="/add" component={AddBadDriver} /> */}
          <Route exact path="/" component={Books} />
         
          */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
