import React from 'react';
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';
const NavBarElement = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Developer Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Projects">스터디목록</Nav.Link>
            <Nav.Link href="/About">커뮤니티</Nav.Link>
            <Nav.Link href="/ReactDoc">실시간대화방</Nav.Link>
            <NavDropdown title="Questions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">취업정보</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                취업 후기
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Programmers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">고객센터</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             로그인
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarElement