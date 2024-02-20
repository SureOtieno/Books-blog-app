import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

import Home from "./components/home/Home";
import "./App.css";
import Create from "./components/Create/Create";
import Login from "./components/login/Login";
import ParticipantDetails from "./components/ParticipantDetails/ParticipantDetails";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const counts = () => {
    dispatch({ type: "CNT" });
  };

  return (
    <Router>
      <div className="App">
        <h1>Book Count {counter}</h1>
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
            <Route path="/books/:id">
              <ParticipantDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
