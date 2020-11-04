import React from "react";
import logo from "./Frame.svg";
import "./styles.css";

const HomePage: React.FC = () => (
  <header className="outer-container">
    <div className="inner-container">
      <img src={logo} className="home-logo" alt="logo" />
      <p className="description">
        Try matching the WillowTree employee to their photo.
      </p>
      <button className="button">Play!</button>
    </div>
  </header>
);

export default HomePage;
