import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import back from "./Arrow.svg";
import title from "./Title.svg";

import "./styles.css";
import { fetchEmployees } from "./helpers";
import { Employee } from "../../../utilities/types";

const GamePage: React.FC = () => {
  // have a counter of number of correct and incorrect guesses
  const [employees, setEmployees] = React.useState<Employee[] | undefined>(
    undefined
  ); // TODO: set the type constraint
  const [correctGuesses, setCorrectGuesses] = React.useState<number>(0);
  // have a useState for clicked boolean. If clicked, then, reset
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);
  const history = useHistory();
  const fetchData = useCallback(async () => {
    const fetchedEmployees: Employee[] = await fetchEmployees();
    setEmployees(fetchedEmployees ?? []);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("the list of employees is ", employees);
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
        <div className="game-contents">
          <p className="question-text">
            Which one of these good looking photos is the real
          </p>
          <p className="name">Andrew Shon</p>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
