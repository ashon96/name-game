import React from "react";
import logo from "./Frame.svg";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Button from "../../Button";

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
          <Button
            buttonText="Play!"
            onClick={() => history.push("/game-page")}
          />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
