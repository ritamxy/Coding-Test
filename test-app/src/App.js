import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import InternalPage from "./pages/InternalPage";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

ReactGA.initialize("UA-212171696-1");

ReactGA.set({
  username: localStorage.getItem("userName"),
});

const eventTrack = (category, action, label) => {
  console.log("GA event:", category, ":", action, ":", label);
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/internalpage" element={<InternalPage />} />
          <Route
            path="/login"
            element={<LoginPage eventTrack={eventTrack} />}
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
