import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'



let Colmd = (props) => {
  return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}


function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">

      <Navbar bg="light" variant="light" className='Daitda-header'>
        <Container>
          <Navbar.Brand href="#home">Daitda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <div className='container'>
        <div className='row'>
          <Colmd shoes={shoes[0]} i={1}></Colmd>
          <Colmd shoes={shoes[1]} i={2}></Colmd>
          <Colmd shoes={shoes[2]} i={3}></Colmd>      
        </div>
      </div>
    </div>
  );
}

export default App;
