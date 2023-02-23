import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
// import styled from 'styled-components'
import './Navbar.css';

function NavbarElements() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#A7BFFD" variant="light" id='Navbar1' className='NavBar' >
      <Container>
        <div className='menu'>
        <Navbar.Brand href="#home" id='Logo'>
          Muse Market
        </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto" id='login'>  
          {/* <div className='div10'> */}
            <Nav.Link href="/Home" className='home'>홈</Nav.Link>
            <Nav.Link href="/About" className='job'>구인/구직</Nav.Link>
            <Nav.Link href="/Projects" className='career'>이력서</Nav.Link>
            <Nav.Link href="/Questions" className='study'>스터디</Nav.Link>
            <NavDropdown title="커뮤니티" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">채팅</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               인터뷰
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">자유게시판</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                공연정보
              </NavDropdown.Item>
            </NavDropdown>
          {/* </div> */}
          </Nav>
          
          <Nav className='login2'>
            <Nav.Link className='login' href="/login">로그인</Nav.Link>
            <Nav.Link eventKey={2} href="/membership" className='membership'>
              회원가입
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// const div2 = styled.div`
//   position: absolute;
//   width: 858px;
//   height: 44px;
//   right: 595px;
//   top: 65px;
//   display: inline-block;
//   filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.05));
//`



export default NavbarElements