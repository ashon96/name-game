import React from "react";
import componentStyles from "./styles.module.css";
import cn from "classnames";

interface Props {
  onClick: () => void;
  buttonText: string;
  disabled?: boolean;
  additionalClassName?: string;
}
const Button: React.FC<Props> = ({
  onClick,
  buttonText,
  disabled,
  additionalClassName,
}) => (
  <button
    className={cn(componentStyles.button, additionalClassName)}
    onClick={onClick}
    disabled={disabled}
  >
    {buttonText}
  </button>
);

export default Button;
