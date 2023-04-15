import Home from "./pages/home";
import GlobalStyle from "./styles/globalstyle";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Community from "./pages/Community";
import Job from "./pages/Job";
import Login from "./pages/Login";
import Membership from "./pages/Membership";
import Study from "./pages/Study";
import MainHeader from "./components/header";
import { useState } from "react";
import AfterHeader from "./components/AfterHeader";
import Form from "./pages/Form";



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
          <Route path="/study" element={<Study />}></Route>
          <Route path="/form" element={<Form/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
