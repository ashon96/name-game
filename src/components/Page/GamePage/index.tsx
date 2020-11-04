import React from "react";
import { useHistory } from "react-router-dom";
import back from "./Arrow.svg";

import "./styles.css";

const GamePage: React.FC = () => {
  const history = useHistory();
  // add hover state to arrow
  return (
    <div className="game-background">
      <div className="outer-container">
        <div className="top-bar">
          <img
            src={back}
            className="arrow"
            alt="logo"
            onClick={() => history.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
