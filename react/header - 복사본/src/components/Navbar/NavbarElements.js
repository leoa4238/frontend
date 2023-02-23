import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: rgba(167, 191, 253, 0.8);
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
`;

const NavItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
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

const DropDown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropDownBtn = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  background-color: rgba(167, 191, 253, 0.8);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const DropDownItem = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 10px;

  &:hover {
    background-color: #fff;
    color: rgba(167, 191, 253, 0.8);
  }
`;

const DropDownLink = styled(NavLink)`
  display: block;
  padding: 10px;
`;

function NavbarElements() {
  return (
    <NavbarContainer>
      <Logo href="/">Muse Market</Logo>
      <Nav>
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
    </NavbarContainer>
  );
}

export default NavbarElements;
