import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Teams from "./Teams";
import Players from "./Players";
import Championships from "./Championships"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/players">Players</Link>
            </li>
            <li>
              <Link to="/championships">Championships</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/championships">
            <Championships />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}


