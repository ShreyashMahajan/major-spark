import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/homePage/home";


function App() {
  return (
    <div className="App">
         {/* checking */}
          <Routes>
            <Route exact path="/" element={ <Home />} />
          </Routes>
    </div>
  );
}

export default App;
