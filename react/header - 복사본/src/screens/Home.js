import React from 'react'
import styled from 'styled-components'
import companyLogo from '../img/icon.png';
import MusicLogo from '../img/backgroundimg.png';
import Search from '.././components/Search';
import OptBox from '../components/Card';

const Home = () => {
  return (
    <>
      <Container>
        <Mainmg>문화 예술 채용을 편리하게</Mainmg>
        <Mainmg2>뮤즈 마켓은 프리랜서와 기업 채용 정보를 제공하는 대표적인 구인 구직 사이트입니다</Mainmg2>
        <ButtonsWrapper>
          <Backgr>지원하기</Backgr>
          <DetailBtn>자세히</DetailBtn>
        </ButtonsWrapper>
      </Container>
      <Icon src={companyLogo} alt="Icon img" />
      <MusicMg src={MusicLogo} alt ="symbol"/>
      <SearchBarWrapper>
        <Search placeholder="Search" />
      <OptBox></OptBox>
      </SearchBarWrapper>
    </>
  )
}

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -100px; /* 아이콘 보다 20px 아래에 위치 */
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const MusicMg = styled.img`
position: absolute;
width: 1035.5px;
height: 708px;
left: 900.5px;
top: 128px;
`


const Icon = styled.img`
  position: relative;
  width: 678.99px;
  height: 185.61px;
  left: 13.01px;
  top: -200.83px;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

const Mainmg = styled.h1`
  position: absolute;
  width: 491px;
  height: 42px;
  left: 76px;
  top: 286px;
  color: #1A202C;
  font-weight: bold;
`

const Mainmg2 = styled.h3`
  position: absolute;
  width: 533px;
  height: 14px;
  left: 75px;
  top: 411px;
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

const ButtonsWrapper = styled.div`
  position: absolute;
  left: 75px;
  top: 500px;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    top: 590px;
  }
  z-index: 1; // 새로운 속성 추가
`;

const Backgr = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 8px;
  width: 150px;
  height: 44px;
  background: #FFFFFF;
  border-radius: 4px;
  float: inline-start;
  &:hover{  
    background-color: #ADADAD;
    color : #FFFFFF;
    transition: 0.4s;
  }
`

const DetailBtn = styled.button`
  border: none;
  color: #1A202C;
  background: none;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
`
export default Home;
