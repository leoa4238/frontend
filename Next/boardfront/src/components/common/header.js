import { ArrowBtn, ArrowWrap, Carousel, CarouselContents, CarouselDetail, CarouselItem, CarouselTextWrap, CarouselTitle, JoinBtn, LoginBtn, MainHeader, MainNav, MenuItem, MenuWrap, NavBtnWrap, Pin, PinItem } from "@/styles/common/header.styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () =>{
  //main:1, 게시판 2 할일목록 3
  const [currentMenu, setCurrentMenu] = useState(1)
  
  const router = useRouter();

  return(
    <MainHeader>
      <MainNav>
          <Image src={'/LogoLeo.png'} alt="log image" width={120} height={150}/>
        <NavBtnWrap>
          <LoginBtn>로그인</LoginBtn>
          <JoinBtn>회원가입</JoinBtn>
        </NavBtnWrap>
      </MainNav>
      <Carousel>
        <CarouselContents>
          <CarouselItem>
            <CarouselTextWrap>
              <CarouselTitle>내가 만드는 사이트</CarouselTitle>
              <CarouselDetail>이곳은 CarouselSlide가 적용되는 곳입니다</CarouselDetail>
            </CarouselTextWrap>
          </CarouselItem>
        </CarouselContents>
        <ArrowWrap>
          <ArrowBtn>{'<'}</ArrowBtn>
          <ArrowBtn>{'>'}</ArrowBtn>
        </ArrowWrap>

        <Pin>
          <PinItem current/>
          <PinItem/>
          <PinItem/>
        </Pin>
      </Carousel>
      <MenuWrap>
        <MenuItem onClick={()=>{
          setCurrentMenu(1);
          router.push('/')
        }} current={currentMenu === 1}>메인</MenuItem>
        <MenuItem onClick={()=>{
          setCurrentMenu(2);
          router.push('/boards');
        }}  current={currentMenu === 2}>게시판</MenuItem>
        <MenuItem onClick={
         ()=>{setCurrentMenu(3)} 
          } current={currentMenu === 3}>할일 목록</MenuItem>
      </MenuWrap>
    </MainHeader>
  )

}

export default Header;