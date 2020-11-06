import React from "react";
import title from "icons/Title.svg";

import componentStyles from "./styles.module.css";
const TitleHeader: React.FC = () => (
  <img src={title} className={componentStyles.title} alt="title-text" />
);

export default TitleHeader;
