import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home.js";
import NavBar from "./features/NavBar.js";

function App() {
  return (
    <>
      <div className="home-container">
        <NavBar />
        <Switch>
          <Home />
        </Switch>
      </div>
    </>
  );
}

export default App;
