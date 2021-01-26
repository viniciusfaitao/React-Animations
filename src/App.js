import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { InputName } from "./components/inputName/InputName";
import { UserContextProvider } from "./contexts/UserContext";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <Switch>
            <Route path="/home" children={<Home />} />
            <Route path="/" children={<InputName />} />
          </Switch>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
