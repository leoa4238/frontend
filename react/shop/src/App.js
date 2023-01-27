import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover';
import Semi from './routes/Semi';

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
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수

  return (
    <div className="App">

      
      <Navbar bg="light" variant="light" className='Daitda-header'>
        <Container>
          <Navbar.Brand href="#home">Daitda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('./Detail')}}>detail</Nav.Link>
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
        <Route path='/detail/:id' element={<Semi shoes={shoes}/>} />
        
        <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>member</div>} />
        <Route path='location' element={<div>위치정보</div>} />
        </Route>
        <Route path='/event' element={<Event/>}>
        <Route path='one' element={<p>첫 주문시 컨버스 서비스</p>} />
        <Route path='two' element={<p>생일기념 쿠폰 받기</p>} />
        </Route>
        

        {/* 404페이지를 보여주고 싶을때 */}
        <Route path='*' element={<div>없는 페이지 입니다</div>} /> 
      </Routes>
      

    </div>
  );
}
function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
