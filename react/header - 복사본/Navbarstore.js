import React, { useState } from "react";
import styled from "styled-components";

import { MdMenu } from "react-icons/md"; // 예시로 추가한 import문

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: rgba(167, 191, 253, 0.8);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
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
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Login = styled.a`
  margin-left: auto;
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
`;

const SignUp = styled.a`
  color: #fff;
  text-decoration: none;
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const HamburgerIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: 0.3s;

  ${(props) =>
    props.open &&
    `
    transform: rotate(-45deg);
    background-color: rgba(0, 0, 0, 0);
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
      background-color: rgba(0, 0, 0, 0);
    }
  `}
`;

const NavbarElements = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo href="/">Muse Market</Logo>
      <Nav open={isOpen}>
        <NavItem>
          <NavLink href="/">홈</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About">구인/구직</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Project">이력서</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Questions">스터디</NavLink>
        </NavItem>
        <NavItem>
          <DropDown>
            <DropDownBtn>커뮤니티</DropDownBtn>
            <DropDownContent>
              <DropDownItem href="#">채팅</DropDownItem>
              <DropDownItem href="#">인터뷰</DropDownItem>
              <DropDownItem href="#">자유게시판</DropDownItem>
              <DropDownItem href="#">공연정보</DropDownItem>
            </DropDownContent>
          </DropDown>
        </NavItem>
      </Nav>
      <div>
        <Login href="/login">로그인</Login>
        <SignUp href="">회원가입</SignUp>
      </div>
      <HamburgerMenu onClick={handleMenuClick}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
    </NavbarContainer>
  );
};

export default NavbarElements;
