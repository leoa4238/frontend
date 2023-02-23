// 삼항 연산자 및 논리 연산자가 사용되는 경우
import Header from "../components/header";
import styled from "styled-components";
import { useState } from "react";


const OpPage = ( )=>{
  const subtitle = "삼항연산자 및 논리 연산자 입니다"
  const detail = "리엑트나 자바스크립트에서는 삼항연산자 및 논리연산자를 쓰는 경우가 많습니다"
  
 const [isClicked, setIsClicked] =useState(0)

  function onDivClick(){
    setIsClicked(1) 
  }

  return ( 
    <>
    <Header subtitle={subtitle} detail={detail}/>
    {/* a, isCar의 경우에는 존재하지 않는 속성이기 때문에, 그렇게 되는 것 입니다 */}
    <MyDiv id="div1" a ='안녕' isCar='true'>div1입니다</MyDiv>
    <MyDiv id="div2">div2입니다</MyDiv>
    <MyDiv onClick={onDivClick} a = {isClicked}>div3</MyDiv>
    
    </>
  );
}

const MyDiv = styled.div`
  border: 3px solid black;
  display: inline-block;
  width: 300px;
  height: 100px;
  text-align: center;
  margin: 0 20px;
  background-color: ${(props)=>props.a ? 'red' : ''}; //mydiv안쪽에 있는 객체를 받아왔다 안녕을 받아왔다 첫번째 div의 경우에는 props a의 값을 받아왔다
 
  &::after{
    content:${({isCar})=>isCar && "'🚗'"}
  }
  &:hover{//&자기자신의 요소라는뜻 
    background-color: #e9e9e9;
  } 
  
`

// const MyH2 = styled.h2`
// color : red;
// text-align: center;
// `
export default OpPage;