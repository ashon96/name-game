import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import back from "./Arrow.svg";
import title from "./Title.svg";

import "./styles.css";
import { fetchData } from "./helpers";

const GamePage: React.FC = () => {
  const history = useHistory();

  // TODO: Have a useEffect here to populate useState with data
  useEffect(() => {
    // TODO
    fetchData();
    // console.log(jsonObject);
  }, []);
  // have a counter of number of correct and incorrect guesses
  const [data, setData] = React.useState<any[]>([]); // TODO: set the type constraint
  const [correctGuesses, setCorrectGuesses] = React.useState<number>(0);
  // have a useState for clicked boolean. If clicked, then, reset
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);

  // add hover state to arrow
  return (
    <div className="game-background">
      <div className="outer-container">
        <div className="top-bar">
          <img
            src={back}
            className="arrow"
            alt="back-arrow"
            onClick={() => history.push("/")}
          />
          <img src={title} className="title" alt="title-text" />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
