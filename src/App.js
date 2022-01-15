import Navbar from "./components/UI/Navbat/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/App.css";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
