import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import back from "./Arrow.svg";
import title from "./Title.svg";

import "./styles.css";
import { fetchEmployees, loadInitialPageData } from "./helpers";
import { Employee } from "../../../utilities/types";
import Button from "../../Button";

const GamePage: React.FC = () => {
  // have a counter of number of correct and incorrect guesses
  const [employeeToGuess, setEmployeeToGuess] = React.useState<Employee>();
  const [randomEmployees, setRandomEmployees] = React.useState<Employee[]>([]);
  // const [randomEmployees, setRandomEmployees] = React.useState<Employee[]>([]);
  const [employees, setEmployees] = React.useState<Employee[] | undefined>(
    undefined
  ); // TODO: set the type constraint
  const [correctGuesses, setCorrectGuesses] = React.useState<number>(0);
  // have a useState for clicked boolean. If clicked, then, reset
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);
  const [loadProgress, setLoadProgress] = React.useState<boolean>(true);

  const history = useHistory();
  const fetchData = useCallback(async () => {
    const fetchedEmployees: Employee[] = await fetchEmployees();
    setEmployees(fetchedEmployees ?? []);
    loadInitialPageData(
      fetchedEmployees,
      setEmployees,
      setEmployeeToGuess,
      setRandomEmployees
    );
  }, []);

  useEffect(() => {
    fetchData();
    setLoadProgress(false);
  }, [fetchData]);

  console.log("still 236, right?? ", employees?.length);

  const verifyUserChoice = (chosenEmployee: Employee) => {};
  // add hover state to arrow
  // we want the 'continue' button to render a new random list
  return !loadProgress && employees ? (
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
          <p className="name">{`${employeeToGuess?.firstName} ${employeeToGuess?.lastName}`}</p>
          <div className="photo-grid">
            {randomEmployees.map((item) => (
              <img src={`${item.headShot.url}`} height={260} width={260}></img>
              // add onClick that calls some sort of verify function. Regardless of result,
              // we enable the disabled button, then disabled it again
            ))}
          </div>
          <Button
            buttonText="Continue"
            onClick={() => undefined}
            additionalClassName="button-position"
            // disabled={hasBeenClicked} Worry about this part later
          />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading data...</div>
  );
};

export default GamePage;
