import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import { Routes, Route, Link } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover';


let Colmd = (props) => {
  return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}


function App() {
  let [shoes, setshoes] = useState(data);
  return (
    <div className="App">

      <Navbar bg="light" variant="light" className='Daitda-header'>
        <Container>
          <Navbar.Brand href="#home">Daitda</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' style={{ textDecoration: "none", color: 'grey', padding: '8px', font: '16px' }}>Home</Link>
            <Link to='/detail'style={{ textDecoration: "none", color: 'grey', padding: '8px', font: '16px'}}>page</Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map(function (a, i) {
                    return (
                      <Colmd shoes={shoes[i]} i={i}></Colmd>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path='/detail' element={
          <Semi/>
        } />
      </Routes>

 
    </div>
  );

}

function Semi(){
  return(
    <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
  )
}
export default App;
