import React from "react";
import { Employee } from "utilities/types";
import componentStyles from "./styles.module.css";

interface Props {
  employee: Employee;
  hasPhotoBeenClicked: boolean;
  isCorrectGuess: (chosenEmployee: Employee) => boolean;
  setHasPhotoBeenClicked: (hasPhotoBeenClicked: boolean) => void;
  hasRoundBeenClicked: boolean;
  onClick: () => void;
}

const ProfilePhoto: React.FC<Props> = ({
  employee,
  hasPhotoBeenClicked,
  isCorrectGuess,
  setHasPhotoBeenClicked,
  hasRoundBeenClicked,
  onClick,
}) => {
  const generateClassName = () =>
    hasRoundBeenClicked
      ? !hasPhotoBeenClicked
        ? "disabled-guess"
        : isCorrectGuess(employee)
        ? "correct-guess"
        : "incorrect-guess"
      : "";

  return (
    <>
      <img
        src={`${employee.headShot.url}`}
        height={260}
        className={componentStyles[generateClassName()]}
        onClick={() => {
          if (!hasRoundBeenClicked) {
            setHasPhotoBeenClicked(true);
            onClick();
          }
        }}
        width={260}
        alt={`${employee.id}`}
      ></img>
    </>
  );
};

export default ProfilePhoto;
