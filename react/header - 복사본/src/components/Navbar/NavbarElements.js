import React from "react";
import styled from "styled-components";
import { useState } from "react";


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
            <NavLink href="/Membership">이력서</NavLink>
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
          {/* 로그인과 회원가입 메뉴를 추가 */}
          <NavItem>
            <NavLink href="/login">로그인</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">회원가입</NavLink>
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
  background-color: rgba(167, 191, 253, 0.8);
 
  @media screen and (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
}
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition: all 1s;
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
  transition: all 1s;
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
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

  const DropDown = styled.div`
    position: relative;
    display: inline-block;
  `;
  
  const DropDownBtn = styled.a`
  transition: all 1s;
  color: #fff;
  text-decoration: none;
  /* padding: 10px; */
  cursor: pointer;
`;

const DropDownLink = styled(NavLink)`
  display: block;
  padding: 10px;
`;

const HamburgerIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: all 1s;
  ${(props) =>
    props.open ? `
      transform: rotate(-45deg);
      background-color: rgba(0, 0, 0, 0);
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
        background-color: rgba(0, 0, 0, 0);
      }
    ` : ''}
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
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
`;
