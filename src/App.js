import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import store from "./components/redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar></NavBar>
        <HomePage></HomePage>
      </div>
    </Provider>
  );
}

export default App;
