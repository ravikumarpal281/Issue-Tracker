import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import store from "./components/redux/store";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar></NavBar>
        <SignIn></SignIn>
        {/* <SignUp></SignUp> */}
        {/* <HomePage></HomePage> */}
      </div>
    </Provider>
  );
}

export default App;
