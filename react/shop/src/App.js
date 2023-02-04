import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Semi from './routes/Semi';
import axios from 'axios';
import Cart from './routes/Cart.js'


// export를 선언해야 다른 컴포넌트들이 사용할 수 있게된다
export let Context1 = createContext() //state보관함이라고 생각한다,

function App() {
  let [shoes, setShoes] = useState(data);
  let[재고] = useState([10,11,12])
  
  // let [결과, set결과] = useState(data);
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
                { shoes.map((a, i)=>{
                    return (
                      <Colmd shoes={shoes[i]} i={i} key={i} ></Colmd>
                    )
                  })
                }
              </div>
            </div>
            <button onClick={()=>{
              //로딩중UI 띄우기
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{
                let copy =[...shoes, ...결과.data ]
                setShoes(copy);
              //로딩중 UI 숨기기  
              })
            
            }}>더보기</button>
          </>
        } />
                                          {/* props로 이미 전송중임 */}
        <Route path='/detail/:id' element={
        <Context1.Provider value={{재고}}>
        <Semi shoes={shoes}/>
        </Context1.Provider>
        
        } /> 

        <Route path='/cart' element={<Cart/>}></Route>
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
let Colmd = (props) => {
  return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
