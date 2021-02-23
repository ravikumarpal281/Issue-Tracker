import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import store from "./components/redux/store";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AddIssue from "./components/AddIssue";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IssueDetails from "./components/IssueDetails";
import EditIssue from "./components/EditIssue";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/AddIssue" exact component={AddIssue} />
            <Route path="/Login" exact component={SignIn} />
            <Route path="/Register" exact component={SignUp} />
            <Route path="/issue/:id" exact component={IssueDetails} />
            <Route path="/editIssue/:id" exact component={EditIssue} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
