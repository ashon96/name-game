import React from "react";
import { useHistory } from "react-router-dom";

const GamePage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <button className="button" onClick={() => history.push("/")}>
        Back to home
      </button>
      <div>haha</div>
    </>
  );
};

export default GamePage;
