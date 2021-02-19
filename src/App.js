import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>ISSUE TRACKER</h1>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
