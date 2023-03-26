import React from "react";
import styled from "styled-components";
import ArtLogo from '../../img/폰포튼 1.png';
import { useState } from "react";


const NavbarElements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
      <NavbarContainer>
        <Logo href="/">
        <img src={ArtLogo} alt="Art n Job 로고" />
        </Logo>
        <Nav open={isOpen}>
          <NavItem>
            <NavLink href="/">홈</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/About">구인/구직</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Membership">스터디</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Questions">커뮤니티</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">로그인</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/membership"><button>회원가입</button></NavLink>
          </NavItem>
        </Nav>
        <HamburgerMenu onClick={handleMenuClick}>
          <div />
          <div />
          <div />
        </HamburgerMenu>
      </NavbarContainer>
    );
};

export default NavbarElements;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: #fff;
 
  @media screen and (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
}
`;

const Logo = styled.a`
  font-family: 'Plus Jakarta Sans';
  font-size: 32px;
  font-size: 2rem;
  font-weight: bold;
  color: #3A2A00;
  text-decoration: none;
  transition: all 1s;
  img {
    padding-right: 10px;
    padding-left: 30px;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0;
    margin: 0;
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  margin-left: 30px;
  margin-right: 20px;
  &:last-child {
    margin-right: 40;
  }
   @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled.a`
  font-family: Post No Bills Colombo ExtraBold;
  font-size: 13px;
  font-weight: bold;
  transition: all 1s;
  color: #3A2A00;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;

  button {
    width: 98px;
    height: 31px;
    left: 685px;
    top: 4px;
    background: rgba(255, 199, 66, 1);
    border-radius: 3px;
    border-style: none;
    transition: all 1s;
    &:hover{
      color: #0a58ca;
    }
  }

  @media (max-width: 768px) {
    button {
      display: none;
    }
  }

  &:hover {
    text-decoration: none;
  }
`;
const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-around;
  width: 25px;
  height: 25px;
  cursor: pointer;
  padding: 5px;
      
  div {
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: all 1s linear;
    position: relative;
    transform-origin: 1px;
    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media (min-width: 768px) { /* 768px 이상의 화면 크기에 대해 적용 */
    display: none; /* 숨김 */
}
`;
