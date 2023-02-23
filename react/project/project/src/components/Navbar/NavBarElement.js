import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
const NavBarElement = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Muse Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">홈</Nav.Link>
            <Nav.Link href="/Projects">구인/구직</Nav.Link>
            <Nav.Link href="/About">이력서</Nav.Link>
            <Nav.Link href="/ReactDoc">스터디</Nav.Link>
            <NavDropdown title="Questions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Questions/0">취업정보</NavDropdown.Item>
              <NavDropdown.Item href="/Questions/1">
                취업 후기
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Questions/2">
                Programmers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#Sevice">회원가입</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
             로그인
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarElement