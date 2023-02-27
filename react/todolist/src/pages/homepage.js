import Header from "../components/header";
import { Link } from "react-router-dom"
import SideBar from "../components/sideBar";
import { useState } from "react";

const Homepage = () => {
  // menuOpen 변수에 true --> 메뉴 열림
  // menuOpen 변수에 false --> 메뉴 닫힘, 초기값은 닫혀있는 상태
  const[menuOpen, setMenuOpen]= useState(false); //1. 초기값은 false만 나오고 있음
  return (
    <>
      <Header 
      subtitle="메인페이지 입니다" 
      detail="리엑트문제를 풀어보며 실력을키우자" 
      menuOpen = {menuOpen} //변수를 전달해주고
      setMenuOpen = {setMenuOpen} //함수를 전달해주는 것
      />
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></SideBar>
      <ul>
      <li><Link to='/'>홈페이지로 이동하기</Link></li>
      <li><Link to='/counter'>카운터로 이동하기</Link></li>
      <li><Link to='/operator'>삼항연산자 및 논리연산자로 이동하기</Link></li>
      <li><Link to='/material'>material ui 적용해보기</Link></li>
      </ul>
      
    </>
  );
}

export default Homepage;