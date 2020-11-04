import React from "react";
import HomePage from "./components/Page/HomePage";
// import logo from "./Frame.svg";
import "./App.css";

const App: React.FC = () => (
  <div className="site-background">
    <Router></Router>
    <HomePage />
  </div>
);

export default App;
