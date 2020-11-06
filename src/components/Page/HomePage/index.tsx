import React from "react";
import logo from "./Frame.svg";
import { useHistory } from "react-router-dom";
import componentStyles from "./styles.module.css";
import Button from "../../Button";

const HomePage: React.FC = () => {
  const history = useHistory();

  return (
    <div className={componentStyles["home-background"]}>
      <header className={componentStyles["outer-container"]}>
        <div className={componentStyles["inner-container"]}>
          <img src={logo} className={componentStyles["home-logo"]} alt="logo" />
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
