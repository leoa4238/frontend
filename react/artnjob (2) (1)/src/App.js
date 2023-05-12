import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import GlobalStyle from "./styles/globalstyle";
import Community from "./pages/Community";
import Job from "./pages/Job";
import Login from "./pages/Login";
import Study from "./pages/Study";
import Membership from "./pages/Membership";
import MainHeader from "./components/header";
import { useState } from "react";
import AfterHeader from "./components/AfterHeader";
import Form from "./pages/Form";
import StudyForm from "./pages/StudyForm";
import Promotion from "./pages/Promotion";
import PromotionForm from "./pages/PromotionForm";
import StudyDetailPage from "./pages/StudyDetailPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <div style={{ zIndex: 1, position: "relative" }}>
          {isLoggedIn ? (
            <MainHeader onLogout={handleLogout} />
          ) : (
            <AfterHeader onLogin={handleLogin} />
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/job" element={<Job />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Study" element={<Study />} />
          <Route path="/Studyform" element={<StudyForm />} />
          <Route path="/Promotion" element={<Promotion />} />
          <Route path="/promotionform" element={<PromotionForm />} />
          <Route
            path="/StudyDetailPage/:id"
            element={<StudyDetailPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;