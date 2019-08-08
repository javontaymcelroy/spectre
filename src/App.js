import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
};

export default App;
