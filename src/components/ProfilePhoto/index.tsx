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

/**
 * This component houses an employee to guess for (six of these
 * are rendered on the GamePage via map function). This will render
 * an image from the employee's headshot
 * @param param0
 */
const ProfilePhoto: React.FC<Props> = ({
  employee,
  hasPhotoBeenClicked,
  isCorrectGuess,
  setHasPhotoBeenClicked,
  hasRoundBeenClicked,
  onClick,
}) => {
  /**
   * This function will apply certain css
   * properties such as greying out the image or adding
   * a green/red background depending on user action
   */
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
