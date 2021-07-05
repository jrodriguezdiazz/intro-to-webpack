import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Profile } from "@components/Profile";
import { Error404 } from "@components/Error404";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};
