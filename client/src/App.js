import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens /Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
