// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height:100px;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #5c5c5c;
  color: black;
  border-bottom-width:bold;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItem = styled.a`
  margin-left: 15px;
  color: black;
  text-decoration: none;

  &:hover {
    color: #ccc;
  }

  button {
    
  }
`;

function App() {
  return (
    <HeaderWrapper>
    <Logo><a  href='#'>로고</a></Logo>
    <Nav>
      <NavItem href="#">스터디목록</NavItem>
      <NavItem href="#">나의스터디</NavItem>
      <NavItem href="#">취업정보</NavItem>
      <NavItem href="#">실시간대화방</NavItem>
    </Nav>
    <Nav>
    <NavItem href="#"><button>로그인 </button></NavItem>
    </Nav>
  </HeaderWrapper>
  );
}
export default App;
