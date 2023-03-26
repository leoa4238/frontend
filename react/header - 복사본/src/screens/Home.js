import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import companyLogo from '../img/그림림 1.png';
import LeftLogo from '../img/leftVector.png';
import RightLogo from '../img/Vector.png';



const Home = () => {
  useEffect(() => {
    console.log("OptBox 생성");
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Container>
        <div>
          <MainFontWrap>
            <MainFont1>
              <div>문화 예술 채용을 간편하게</div>
              <span>아트앤잡</span>에 오신것을 환영합니다!
            </MainFont1>
            <MainFont2>
            <div>아트앤잡은 프리랜서와 기업채용 정보를 제공하는 대표적인 구인 구직 사이트입니다</div>
            </MainFont2>
          </MainFontWrap>
          <div>
          <MainImg  src={companyLogo} alt="메인페이지 사진"/>
          </div>
        </div>
        <MainPictureWrap>
          <LeftButtonWrap>
          <LeftButton >
            <img src={LeftLogo}/>
          </LeftButton >
          </LeftButtonWrap>
          
          <RightButtonWrap>
          <RightButton>
            <img src={RightLogo}/>
          </RightButton>
          </RightButtonWrap>
        </MainPictureWrap>
      </Container>
    </>
  );
};
export default Home;


const LeftButton = styled.button`
  border-radius: 30px;
  background-color: #FFEFC8;
  opacity: 0.55;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const LeftButtonWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`


const RightButtonWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const RightButton = styled.button`

border-radius: 30px;
background-color: #FFEFC8;
opacity: 0.55;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`


const MainImg = styled.img`
  width: max-content;
  position: relative;


 @media screen and (max-width: 768px) {
    display: none;
  }
`

const Container = styled.div`
  /* position: relative; */
  background-color: rgba(252, 251, 233, 1);
  display: flex;
  width: 100%;
  height: 100vh;
`

const MainFontWrap = styled.div`
  
  margin: 0 auto;
  padding: 0 50px;
`

const MainFont1 = styled.div`
 font-size: 30px;
  font-weight: 600;
  font-family: 'Quando';
color:rgba(123, 86, 2, 1) ;
div{
  padding-top: 10%; 
}
span{
  color: rgba(83, 59, 1, 1);
}

`
const MainFont2 = styled.div`

font-family: 'Plus Jakarta Sans';
font-weight: 500;
font-size: 14px;
color: rgba(255, 138, 40, 1);
`


const MainPictureWrap = styled.div`
display: flex;
justify-content: space-between;
position: relative;
 margin: 5% 0% 5% 0%;
background: #FFEFC8;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 29px;
width: calc(50% - 5px);
height: 70%;
@media screen and (max-width: 768px) {
    display: none;
  }
`
const Mainmg2 = styled.div`
  display:flex;
  flex-direction: column;
  opacity: calc(45%);
  color: #1A202C;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

