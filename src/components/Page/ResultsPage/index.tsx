import React from "react";
import componentStyles from "./styles.module.css";
import TitleHeader from "components/TitleHeader";

import face from "icons/Face.svg";
import Button from "components/Button";
import { useHistory } from "react-router-dom";
import { calculateSelectionPercentage, calculateAverage } from "./helpers";
import { NUMBER_OF_ROUNDS } from "utilities/constants";

interface Props {
  correctGuesses: number;
  totalDuration: number;
}

/**
 * This page represents all the statistics that the user will see
 * once they have made five guesses in a game. They will see
 * the percentage of correct/incorrect guesses along with
 * the average time they took to answer each question
 */
const ResultsPage: React.FC<Props> = ({ correctGuesses, totalDuration }) => {
  const history = useHistory();
  return (
    <div className={componentStyles["results-background"]}>
      <div className={componentStyles["outer-container"]}>
        <div className={componentStyles["top-bar"]}>
          <TitleHeader />
          <img src={face} alt="face" className={componentStyles.face}></img>
          <p className={componentStyles.congratulations}>
            Congratulations,
            <br />
            you scored {`${correctGuesses}/${NUMBER_OF_ROUNDS}!`}
          </p>
          <div>
            <div className={componentStyles["home-button"]}>
              <Button
                buttonText="Return to Home"
                onClick={() => history.push("/")}
              />
            </div>
          </div>
        </div>

        <div className={componentStyles.statistics}>
          <p
            className={componentStyles["correct-stats-info"]}
          >{`${calculateSelectionPercentage(
            correctGuesses
          )}% Correct Selections`}</p>
          <p className={componentStyles["other-stats-info"]}>
            {`${calculateSelectionPercentage(
              NUMBER_OF_ROUNDS - correctGuesses
            )}% Incorrect Selections`}
          </p>
          <p className={componentStyles["other-stats-info"]}>
            {`${calculateAverage(totalDuration)} sec Avg Selection Time`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
