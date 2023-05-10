import Home from "./pages/home";
import GlobalStyle from "./styles/globalstyle";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
          <Route path="/" element={<Home />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/job" element={<Job />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Membership" element={<Membership />}></Route>
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/Study" element={<Study/>}></Route>
          <Route path="/Studyform" element={<StudyForm/>}></Route>
          <Route path="/StudyDetailPage" element={<StudyDetailPage/>}></Route>
          <Route path="/Promotion" element={<Promotion/>}></Route>
          <Route path="/promotionform" element={<PromotionForm/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
