import styled from "styled-components";
import logo from "../assets/192.png"
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = ({subtitle, detail, menuOpen, setMenuOpen}) => {

  const menuClick=()=>{ //3. menuClick이 false에서 true로 바꿔준다
    setMenuOpen(true)
  }

  return (
    <HeaderWrap>
    <HeaderNav>
      <div>
    <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
      <img src={logo} alt="로고"/>
      <h1>React 안성현</h1>
      </div>
      <MenuIcon onClick={menuClick}></MenuIcon>
    </HeaderNav>
      <h1>도전 리엑트 뿌시기!</h1>
      <h2>{subtitle}</h2>
      <p>{detail}</p>
      <Line></Line>
    </HeaderWrap>
  );
}

export default Header;

const Line = styled.div`
  display: inline-block;
  border-bottom:3px solid #626273;
  width: 150px;
`

const HeaderWrap = styled.div`
text-align: center;
margin-bottom: 30px;
`;


const HeaderNav = styled.nav`
    z-index: 3;
    position: relative;
    padding: 0 5%;
    display: flex; //수평정렬이 되게하기 이해
    height: 60px;
    background-color: #fff;
    box-shadow: 2px 4px 12px rgb(0 0 0/ 8%);
    /* justify-content: center; */
    align-items: center;
    justify-content: space-between; //공간사이에
    &>div {
      display: flex;
      align-items: center;
    }
    & >div> h1{ //자기 자식을 의미함
      color: #61dafb
    }
    & > div> img{
      width: 50px;
    }
  
`