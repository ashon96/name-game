import React from "react";
import { Employee } from "../../utilities/types";
import componentStyles from "./styles.module.css";

interface Props {
  employee: Employee;
  employeeToGuess: Employee;
  hasPhotoBeenClicked: boolean;
  setHasPhotoBeenClicked: (hasPhotoBeenClicked: boolean) => void;
  hasRoundBeenClicked: boolean;
  onClick: () => void;
}

const ProfilePhoto: React.FC<Props> = ({
  employee,
  employeeToGuess,
  hasPhotoBeenClicked,
  setHasPhotoBeenClicked,
  hasRoundBeenClicked,
  onClick,
}) => {
  const isCorrectGuess = (givenEmployee: Employee) =>
    givenEmployee === employeeToGuess && hasRoundBeenClicked;
  const generateClassName = () => {
    let photoClassName = "";
    if (!hasPhotoBeenClicked && hasRoundBeenClicked) {
      photoClassName = "disabled-guess";
    } else if (hasPhotoBeenClicked) {
      if (isCorrectGuess(employee)) {
        photoClassName = "correct-guess";
        console.log(`${employee.firstName} is correct`);
      } else {
        photoClassName = "incorrect-guess";
        console.log(`${employee.firstName} is incorrect`);
      }
    }
    return photoClassName;
  };

  const imageClass = generateClassName();

  return (
    <>
      <img
        src={`${employee.headShot.url}`}
        height={260}
        className={componentStyles[imageClass]}
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
