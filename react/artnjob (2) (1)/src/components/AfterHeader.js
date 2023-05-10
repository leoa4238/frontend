import React from 'react';
import companyLogo from '../assets/images/폰포튼 1.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompanyLogo, HamburgerMenu, HeaderWrap, Nav, NavLi } from '../styles/header.style';

function AfterHeader(props) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleLogout() {
    setIsMenuOpen(false);
    props.onLogin();
  }

  return (
    <HeaderWrap>
      <CompanyLogo src={companyLogo} alt="logo" onClick={() => navigate('/')} />
      <Nav isMenuOpen={isMenuOpen}>
        <NavLi current onClick={() => navigate('/')}>
          홈
        </NavLi>
        <NavLi onClick={() => navigate('/job')}>구인/구직</NavLi>
        <NavLi onClick={() => navigate('/study')}>스터디</NavLi>
        <NavLi onClick={() => navigate('/community')}>커뮤니티</NavLi>
        <NavLi onClick={() => navigate('/myPage')}>마이 페이지</NavLi>
        <NavLi join onClick={handleLogout}>
          로그아웃
        </NavLi>
      </Nav>
      <HamburgerMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </HeaderWrap>
  );
}

export default AfterHeader;