import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import back from "./Arrow.svg";
import title from "./Title.svg";

import componentStyles from "./styles.module.css";
import { fetchEmployees, loadPageData } from "./helpers";
import { Employee } from "../../../utilities/types";
import Button from "../../Button";
import ProfilePhoto from "../../ProfilePhoto";

const GamePage: React.FC = () => {
  // have a counter of number of correct and incorrect guesses
  const [employeeToGuess, setEmployeeToGuess] = React.useState<Employee>();
  const [randomEmployees, setRandomEmployees] = React.useState<Employee[]>([]);
  // const [randomEmployees, setRandomEmployees] = React.useState<Employee[]>([]);
  const [employees, setEmployees] = React.useState<Employee[] | undefined>(
    undefined
  ); // TODO: set the type constraint
  const [correctGuesses, setCorrectGuesses] = React.useState<number>(0);
  const [totalGuesses, setTotalGuesses] = React.useState<number>(0);

  // have a useState for clicked boolean. If clicked, then, reset
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);
  let hasPhotoBeenClickedList = [
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
  ];

  const [loadProgress, setLoadProgress] = React.useState<boolean>(true);

  const history = useHistory();
  const fetchData = useCallback(async () => {
    const fetchedEmployees: Employee[] = await fetchEmployees();
    setEmployees(fetchedEmployees ?? []);
    loadPageData(
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

  console.log("current employee count ", employees?.length);

  const verifyUserChoice = (chosenEmployee: Employee) => {
    setHasBeenClicked(true);
    setTotalGuesses(totalGuesses + 1);
    if (chosenEmployee === employeeToGuess) {
      setCorrectGuesses(correctGuesses + 1);
      console.log("we get here, right?. The correct one");
    } else {
      console.log("we guessed wrong");
    }
  };

  const navigateToNextGuess = () => {
    setHasBeenClicked(false);
    hasPhotoBeenClickedList.forEach((resetPhotoClick) => {
      resetPhotoClick[1](false);
    });
    if (employees) {
      loadPageData(
        employees,
        setEmployees,
        setEmployeeToGuess,
        setRandomEmployees
      );
    }
  };

  const renderGamePageContents = () => {
    if (!loadProgress && employees && employeeToGuess && correctGuesses < 5) {
      return (
        <div className={componentStyles["game-background"]}>
          <div className={componentStyles["outer-container"]}>
            <div className={componentStyles["top-bar"]}>
              <img
                src={back}
                className={componentStyles.arrow}
                alt="back-arrow"
                onClick={() => history.push("/")}
              />
              <img
                src={title}
                className={componentStyles.title}
                alt="title-text"
              />
            </div>
            <div className={componentStyles["game-contents"]}>
              <p className={componentStyles["question-text"]}>
                Which one of these good looking photos is the real
              </p>
              <p
                className={componentStyles.name}
              >{`${employeeToGuess?.firstName} ${employeeToGuess?.lastName}`}</p>
              <div className={componentStyles["photo-grid"]}>
                {randomEmployees.map((item, index) => (
                  <ProfilePhoto
                    employee={item}
                    employeeToGuess={employeeToGuess}
                    hasPhotoBeenClicked={hasPhotoBeenClickedList[index][0]}
                    setHasPhotoBeenClicked={hasPhotoBeenClickedList[index][1]}
                    hasRoundBeenClicked={hasBeenClicked}
                    onClick={() => verifyUserChoice(item)}
                  />
                ))}
              </div>
              <Button
                buttonText="Continue"
                onClick={() => navigateToNextGuess()}
                additionalClassName={componentStyles["button-position"]}
                disabled={!hasBeenClicked}
              />
            </div>
          </div>
        </div>
      );
      // } else if (correctGuesses === 5) {
    } else {
      return <div>Loading data...</div>;
    }
  };

  // add hover state to arrow
  // we want the 'continue' button to render a new random list
  return renderGamePageContents();
};

export default GamePage;
