import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { createContext, useEffect, useState, useTransition, useDeferredValue } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Semi from './routes/Semi';
import axios from 'axios';
import Cart from './routes/Cart.js'
import { useQuery } from 'react-query';


// export를 선언해야 다른 컴포넌트들이 사용할 수 있게된다
export let Context1 = createContext() //state보관함이라고 생각한다,

function App() {
  //누가 세미페이지 접속하면 그 페이지에 보이는 상품id를 가져와서 localStorage에 watched 항목에 추가


  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]))
    //이미watched 항목이 있으면 setItem() 하지말아주세요 구현해보기

  }, [])

  let obj = { name: 'kim' }
  //단점은 JSON파일로 저장했기 때문에 꺼내도 JSON이다
  localStorage.setItem('data', JSON.stringify(obj)) //로컬 스토리지에 저장하는 방법//오브젝트 자료를 JSON으로 바꿔준다
  let 꺼낸거 = localStorage.getItem('data')
  //그래서 JSON.parse를 이용해서 하면 Object 자료형으로 가져올 수 있다.
  
  let a = new Array(10000).fill(0)
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12])
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수
  let [name, setName] = useState('');
  // let [isPending, startTransition] =useTransition() //startTransition = 늦게처리
  // let state = useDeferredValue(name) //()안에 들어간 state들은 늦게 변화한다

  let result = useQuery('서버요청', ()=>{ //틈만 나면 refetch됨
    return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
    return a.data
    }),
    {staleTime : 2000} //타이머 같은 기능도 할 수 있다
  })

   return (
    <div className="App">
      {/* <input onChange={(e)=>{
        startTransition(()=>{
          setName(e.target.value)
        }) //코드 시작을 뒤로 늧줘줌
        }}></input>
      { 
        isPending ? '로딩중' : 
        a.map(()=>{
          return <div>{state}</div>
        })
      } */}
      <Navbar bg="light" variant="light" className='Daitda-header'>
        <Container>
          <Navbar.Brand href="#home">Daitda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('./Detail/0') }}>detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('./Cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('./About') }}>About</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {/* 이렇게 삼항연산자를 사용해도 괜찮고 */}
            {/* { result.isLoading ? '로딩중' : result.data.name}  */}
            
            {/* if문의 효과를 가져오고 싶으면 &&연산자를 쓴다 왼쪽에 있는것이 True면 오른쪽을 가져온다 */}
            {result.isLoading && '로딩중'} 
            {result.error && '에러남'}
            {result.data && result.data.name}
            </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {shoes.map((a, i) => {
                  return (
                    <Colmd shoes={shoes[i]} i={i} key={i} ></Colmd>
                  )
                })
                }
              </div>
            </div>
            <button onClick={() => {
              //로딩중UI 띄우기
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과) => {
                  let copy = [...shoes, ...결과.data]
                  setShoes(copy);
                  //로딩중 UI 숨기기  
                })

            }}>더보기</button>
          </>
        } />
        {/* props로 이미 전송중임 */}
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ 재고 }}>
            <Semi shoes={shoes} />
          </Context1.Provider>

        } />

        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>member</div>} />
          <Route path='location' element={<div>위치정보</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<p>첫 주문시 컨버스 서비스</p>} />
          <Route path='two' element={<p>생일기념 쿠폰 받기</p>} />
        </Route>


        {/* 404페이지를 보여주고 싶을때 */}
        <Route path='*' element={<div>없는 페이지 입니다</div>} />
      </Routes>


    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
let Colmd = (props) => {
  let navigate = useNavigate();
  return (
    <div className='col-md-4'>
      <img onClick={() => { navigate(`./Detail/${props.i}`) }} src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
