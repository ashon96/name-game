import React from "react";
import HomePage from "components/Page/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamePage from "components/Page/GamePage";

/**
 * This react component is essentially the starting point of the application
 * where we wrap each possible component in a Route controlled by a Router
 * to properly navigate the users between each via the path prop provided
 */
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
