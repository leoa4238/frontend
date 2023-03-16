import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Board from './pages/Board';
import backgroundimg from './img/main_bg.png';



function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    background-image: url(${backgroundimg});
    background-color: #04b4e0;
    background-size: 100%;
    background-attachment: fixed;
  }

  html:hover {
    background-color: #FFAD69;
      background-position: 50% 50%;
      transition: 5s;
  }

  @keyframes slide {
    0% {
      background-position: center;
    }
    100% {
      background-position: right;
    }
  }

  .bg-move {
    animation: slide 10s linear infinite;
  }
`;

export default App;