import React from "react";
import title from "icons/Title.svg";

import componentStyles from "./styles.module.css";

/**
 * This component is the header at the top of the site
 * that is reusable and used in both ResultsPage and
 * GamePage components
 */
const TitleHeader: React.FC = () => (
  <img src={title} className={componentStyles.title} alt="title-text" />
);

export default TitleHeader;
