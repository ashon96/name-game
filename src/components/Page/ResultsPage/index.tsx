import React from "react";
import componentStyles from "./styles.module.css";
import TitleHeader from "components/TitleHeader";

import face from "icons/Face.svg";
import Button from "components/Button";
import { useHistory } from "react-router-dom";
import { calculateSelectionPercentage, calculateAverage } from "./helpers";

interface Props {
  correctGuesses: number;
  totalDuration: number;
}

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
            you scored {`${correctGuesses}/5!`}
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
          <p className={componentStyles["incorrect-stats-info"]}>
            {`${calculateSelectionPercentage(
              5 - correctGuesses
            )}% Incorrect Selections`}{" "}
          </p>
          <p className={componentStyles["incorrect-stats-info"]}>
            {`${calculateAverage(totalDuration)} sec Avg Selection Time`}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
