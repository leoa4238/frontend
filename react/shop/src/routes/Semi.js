import '../App.css';
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import './Semi.css';
import Nav from 'react-bootstrap/Nav';
import App from '../App.js'
import { Context1 } from '../App.js'
import { addItem } from './../store';
import { useDispatch } from 'react-redux';


function Semi(props) {
  let { 재고, shoes } = useContext(Context1)     //state 사용은 useContext(Context)
  let [fade2, setFade2] = useState('');
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch();
  let [num, setNum] = useState('');


  useEffect(() => {
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)
    꺼낸거 = new Set(꺼낸거) //중복을 제거해준다 array 자료형을 중복 제거해주려면 
    꺼낸거 = Array.from(꺼낸거) //그리고 다시 array형으로 만들어준것이다
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])


  useEffect(() => { //mount, update시 실행됨 
    let a = setTimeout(() => { setAlert(false) }, 2000)
    return () => {//useEffect 동작전에 실행되는 것 return()=>{}
      clearTimeout(a) //타이머를 제거해주는 함수
    }
  }, []) //[] : dependency 아무런 변수나 state를 집어넣을 수 있다
  useEffect(() => {
    setTimeout(setFade2(' end '), 100)

    return () => {
      setFade2(' ')

    }
  }, [])

  let { id } = useParams();
  //  let 찾은상품 = props.shoes.find(function(x){
  //   return x.id == id;
  //  })
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  // .find() 문법을 사용하면 array자료 안에서 원하는 항목만 가져올 수 있다

  return (
    <div className={'container start' + fade2}>
      {alert == true ?
        <div className="alert alert-warning">
          2초이내 구매시 할인
        </div> : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }))
          }}>주문하기</button>
        </div>
      </div>   {/*처음 만든 키를 눌려있게 하고 싶으면 defaltActiveKey를 사용한다*/}

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼3</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  )
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState('')
  let { 재고 } = useContext(Context1)


  useEffect(() => {
    let a = setTimeout(() => { setFade('end') }, 100) //0.1초 후에 코드를 실행해줘라! //그다음에 실행됨

    return () => { //먼저실행됨 
      clearTimeout(a)
      setFade('');
    }
  }, [탭]) //탭이라는 게 변경될때 마다 실행해줌


  return (<div className={`start ${fade}`}>
    {[<div>{'재고' + 재고[0]}</div>, <div>{'재고' + 재고[1]}</div>, <div>{'재고' + 재고[2]}</div>][탭]}
  </div>)
}

export default Semi;    