import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./component/pages/MainPage";
import UsersPage from "./component/pages/UsersPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/users/:userId?/:type?" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
