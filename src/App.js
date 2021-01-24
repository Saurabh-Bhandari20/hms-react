import Home from "./components/Home/Home";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { SLogin, PLogin } from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/staff_login" component={SLogin} />
        <Route path="/patient_login" component={PLogin} />
        <Route path="/patient_dashboard" component={Dashboard} />
        <Redirect exact to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
