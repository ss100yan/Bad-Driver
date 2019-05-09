import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/MainPage";
import AddBadDriver from "./pages/AddBadDriver";
import login from "./pages/login";
import Detail from "./pages/Comment";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import './App.css';




function App() {
  return (
    <Router>
      <div className="bg">
        <Nav />
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/add" component={AddBadDriver} />
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
