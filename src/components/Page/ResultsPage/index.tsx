import React from "react";
import componentStyles from "./styles.module.css";
import TitleHeader from "../../TitleHeader";
import square from "../../../icons/Square.svg";

import star from "../../../icons/Star.svg";
import triangle from "../../../icons/Triangle.svg";
import face from "../../../icons/Face.svg";

const ResultsPage: React.FC = () => {
  return (
    <div className={componentStyles["results-background"]}>
      <div className={componentStyles["top-bar"]}>
        <TitleHeader />
        <div className={componentStyles["shapes-container"]}>
          <img
            src={square}
            className={componentStyles.square}
            alt="square"
          ></img>
          <img src={star} className={componentStyles.star} alt="star"></img>
          <img
            src={triangle}
            className={componentStyles.triangle}
            alt="triangle"
          ></img>
          <img src={face} alt="face" className={componentStyles.face}></img>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
