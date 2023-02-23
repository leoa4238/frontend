import Header from "../components/header";
import { Link } from "react-router-dom"
import SideBar from "../components/sideBar";

const Homepage = () => {
  return (
    <>
      <Header subtitle="메인페이지 입니다" detail="리엑트문제를 풀어보며 실력을키우자" />
      <SideBar></SideBar>
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