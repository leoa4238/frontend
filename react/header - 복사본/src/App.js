import Home from './screens/Home'
import Questions from './screens/Questions';
import Projects from './screens/Projects';
import About from './screens/About'
import ReactDoc from './screens/ReactDoc';
import Membership from './screens/Membership';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarElements from './components/Navbar/NavbarElements';
import { createGlobalStyle } from "styled-components";


function App() {
  return (
  <>
  <GlobalStyle />
  <Router>
    <NavbarElements/>
  <Routes>
    <Route path="/" element = {<Home/>}></Route>
    <Route path="/About" element = {<About/>}></Route>
    <Route path="/Projects" element = {<Projects/>}></Route>
    <Route path="/Questions" element = {<Questions/>}></Route>
    <Route path="/ReactDoc" element = {<ReactDoc/>}></Route>
    <Route path="/Membership" element = {<Membership/>}></Route>
  </Routes>
  </Router>
  </>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFFF;
  }
`;