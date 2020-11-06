import React from "react";
import homeLogo from "icons/HomeLogo.svg";
import { useHistory } from "react-router-dom";
import componentStyles from "./styles.module.css";
import Button from "components/Button";

/**
 * This page represents the start screen the user is presented with
 */
const HomePage: React.FC = () => {
  /**
   * Fetched history (part of React Router) in order to properly
   * navigate between different pages/routes
   */
  const history = useHistory();

  return (
    <div className={componentStyles["home-background"]}>
      <header className={componentStyles["outer-container"]}>
        <div className={componentStyles["inner-container"]}>
          <img
            src={homeLogo}
            className={componentStyles["home-logo"]}
            alt="logo"
          />
          <p className={componentStyles.description}>
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
