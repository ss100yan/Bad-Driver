import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/MainPage";
import NoMatch from "./pages/NoMatch";
import PersistentDrawerLeft from "./components/Nav";
import './App.css';




function App() {
  return (
    <Router>
      <div className="bg">
        <PersistentDrawerLeft />
          <Switch>
            
          <Route exact path="/" component={Books} />
         
          
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
