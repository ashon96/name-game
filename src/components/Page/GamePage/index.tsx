import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import arrow from "icons/Arrow.svg";

import componentStyles from "./styles.module.css";
import { convertMillisecondsToSeconds, loadPageData } from "./helpers";
import { Employee } from "utilities/types";
import Button from "components/Button";
import ProfilePhoto from "components/ProfilePhoto";
import ResultsPage from "components/Page/ResultsPage";
import TitleHeader from "components/TitleHeader";
import { fetchEmployees } from "utilities/helpers";

const GamePage: React.FC = () => {
  const [initialStartTime, setInitialStartTime] = React.useState<number>(0);
  const [employeeToGuess, setEmployeeToGuess] = React.useState<Employee>();
  const [randomEmployees, setRandomEmployees] = React.useState<Employee[]>([]);
  const [employees, setEmployees] = React.useState<Employee[] | undefined>(
    undefined
  );
  const [correctGuesses, setCorrectGuesses] = React.useState<number>(0);
  const [totalGuesses, setTotalGuesses] = React.useState<number>(0);

  // have a useState for clicked boolean. If clicked, then, reset
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);
  const photoUseStateList = [
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
  ];

  console.log("initial is ", initialStartTime);

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
    setInitialStartTime(new Date().getTime());
  }, [fetchData]);

  const isCorrectGuess = (givenEmployee: Employee) =>
    givenEmployee === employeeToGuess;

  const verifyUserChoice = (chosenEmployee: Employee) => {
    setHasBeenClicked(true);
    setTotalGuesses(totalGuesses + 1);
    if (isCorrectGuess(chosenEmployee)) {
      setCorrectGuesses(correctGuesses + 1);
    }
  };

  const navigateToNextGuess = () => {
    setHasBeenClicked(false);
    photoUseStateList.forEach((resetPhotoClick) => {
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
    if (!loadProgress && employees && employeeToGuess && totalGuesses < 5) {
      return (
        <div className={componentStyles["game-background"]}>
          <div className={componentStyles["outer-container"]}>
            <div className={componentStyles["top-bar"]}>
              <img
                src={arrow}
                className={componentStyles.arrow}
                alt="back-arrow"
                onClick={() => history.push("/")}
              />
              <TitleHeader />
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
                    hasPhotoBeenClicked={photoUseStateList[index][0]}
                    isCorrectGuess={isCorrectGuess}
                    setHasPhotoBeenClicked={photoUseStateList[index][1]}
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
    } else if (totalGuesses === 5) {
      return (
        <ResultsPage
          correctGuesses={correctGuesses}
          totalDuration={
            convertMillisecondsToSeconds(new Date().getTime()) -
            convertMillisecondsToSeconds(initialStartTime)
          }
        />
      );
    } else {
      return <div>Loading data...</div>;
    }
  };

  return renderGamePageContents();
};

export default GamePage;
