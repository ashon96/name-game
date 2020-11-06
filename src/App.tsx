import React from "react";
import HomePage from "components/Page/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamePage from "components/Page/GamePage";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route key="home-page" exact path="/" component={() => <HomePage />} />
      <Route
        key="game-page"
        exact
        path="/game-page"
        component={() => <GamePage />}
      />
    </Switch>
  </Router>
);

export default App;
