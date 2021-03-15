import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import store from "./components/redux/store";
import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const SignUp = lazy(() => import("./components/SignUp"));
const SignIn = lazy(() => import("./components/SignIn"));
const AddIssue = lazy(() => import("./components/AddIssue"));
const IssueDetails = lazy(() => import("./components/IssueDetails"));
const EditIssue = lazy(() => import("./components/EditIssue"));
const TopIssuesInfo = lazy(() => import("./components/TopIssuesInfo"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Suspense fallback={<Spinner animation="border" variant="success" />}>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/AddIssue" exact component={AddIssue} />
              <Route path="/Login" exact component={SignIn} />
              <Route path="/Register" exact component={SignUp} />
              <ProtectedRoute
                path="/issue/:id"
                exact
                component={IssueDetails}
              ></ProtectedRoute>
              {/* <Route path="/issue/:id" exact component={IssueDetails} /> */}
              <ProtectedRoute
                path="/editIssue/:id"
                exact
                component={EditIssue}
              ></ProtectedRoute>
              {/* <Route path="/editIssue/:id" exact component={EditIssue} /> */}
              <Route path="/TopIssues" exact component={TopIssuesInfo} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
