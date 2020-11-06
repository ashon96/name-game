import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import arrow from "icons/Arrow.svg";
import { convertMillisecondsToSeconds, loadPageData } from "./helpers";
import { Employee } from "utilities/types";
import Button from "components/Button";
import ProfilePhoto from "components/ProfilePhoto";
import ResultsPage from "components/Page/ResultsPage";
import TitleHeader from "components/TitleHeader";
import { fetchEmployees } from "utilities/helpers";

import componentStyles from "./styles.module.css";
import { NUMBER_OF_ROUNDS } from "utilities/constants";

/**
 * The Page that renders the actual game where each round will be rendered
 * along with the six employees to guess
 */
const GamePage: React.FC = () => {
  /**
   * The instance of start time that one full game starts
   */
  const [initialStartTime, setInitialStartTime] = React.useState<number>(0);
  /**
   * The current employee to guess in a given round
   */
  const [employeeToGuess, setEmployeeToGuess] = React.useState<Employee>();
  /**
   * The current six employees to guess from in a round, which includes the
   * employee to guess
   */
  const [randomEmployees, setRandomEmployees] = React.useState<Employee[]>([]);
  /**
   * All the employees that are fetched via API. This list will decrement by six
   * each time a new round starts in a game
   */
  const [employees, setEmployees] = React.useState<Employee[] | undefined>(
    undefined
  );
  /**
   * The current count of correct guesses the user makes
   */
  const [correctGuesses, setCorrectGuesses] = React.useState<number>(0);
  /**
   * The total number of guesses the user makes
   */
  const [totalGuesses, setTotalGuesses] = React.useState<number>(0);

  /**
   * In each round, hasBeenClicked is set to false and will be set to true
   * when a user makes a guess
   */
  const [hasBeenClicked, setHasBeenClicked] = React.useState<boolean>(false);
  /**
   * A list of managed state for each of the six employees' photo to guess from.
   * If a certain photo/employee is clicked, their given boolean useState
   * will be set to true. This value for each of the will be used to determine
   * the styling of that given photo (see ProfilePhoto component for more context)
   */
  const photoUseStateList = [
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
    React.useState<boolean>(false),
  ];

  /**
   * When loading up the API data on useEffect (initial page load), we leave this as true and set it to false
   * as soon as we fetch all the data, so that the GamePage has to load afterwards
   */
  const [loadProgress, setLoadProgress] = React.useState<boolean>(true);

  /**
   * Fetched history (part of React Router) in order to properly
   * navigate between different pages/routes
   */
  const history = useHistory();

  /**
   * Fetches all the employees via API and sets all the proper data
   * to populate the page
   */
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

  /**
   * Renders these functions before the GamePage
   * can render
   */
  useEffect(() => {
    fetchData();
    setLoadProgress(false);
    setInitialStartTime(new Date().getTime());
  }, [fetchData]);

  /**
   * Performs comparison of the employee the user clicked
   * on and the employee to guess
   * @param chosenEmployee employee the user clicked on
   */
  const isCorrectGuess = (chosenEmployee: Employee) =>
    chosenEmployee === employeeToGuess;

  /**
   * Verifies that what the user chooses is correct,
   * if so, then increment the number of correct guesses.
   * Regardless, increment the number of guesses
   * @param chosenEmployee the employee the user clicked on
   */
  const verifyUserChoice = (chosenEmployee: Employee) => {
    setHasBeenClicked(true);
    setTotalGuesses(totalGuesses + 1);
    if (isCorrectGuess(chosenEmployee)) {
      setCorrectGuesses(correctGuesses + 1);
    }
  };

  /**
   * Loads up new data for the new round
   * by resetting the states of each photo
   * of the guessed employees and reloads
   * a new set of random employee and employee
   * list
   */
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

  /**
   * Function that selectively renders the page based on certain criteria:
   * -- If the page has finished loading along with the employees, employee to guess
   * and the total guesses are less than 5, we render the game itself
   * -- If the user has guessed five times in total, we navigate the user
   * to the results/statistics page
   * -- Otherwise, render a loading div until the page has finished loading the data
   */
  const renderGamePageContents = () => {
    if (
      !loadProgress &&
      employees &&
      employeeToGuess &&
      totalGuesses < NUMBER_OF_ROUNDS
    ) {
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
    } else if (totalGuesses === NUMBER_OF_ROUNDS) {
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
