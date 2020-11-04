import React from "react";
import logo from "./Frame.svg";
import { useHistory } from "react-router-dom";
import "./styles.css";

const HomePage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="home-background">
      <header className="outer-container">
        <div className="inner-container">
          <img src={logo} className="home-logo" alt="logo" />
          <p className="description">
            Try matching the WillowTree employee to their photo.
          </p>
          <button className="button" onClick={() => history.push("/game-page")}>
            Play!
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
