import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="Container">
        <Home />
      </div>
    </div>
  );
};

export default App;
