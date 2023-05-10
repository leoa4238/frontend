import React, { useState } from 'react'
import {RegisterWrap, RegisterWrapper, RegiststerDiv, SearchingBar, SearchingBarWrap, SemiCategory, SemiCategoryWrapper, SemiWrapper } from '../styles/jobstyle';
import { RegisterButton } from '../styles/formSrtyle';
import TriangleIcon from '../styles/TriangleIcon';
import Dropdown from '../components/Dropdown ';
import { useNavigate } from 'react-router-dom';
import { StudyContents, StudyContentsElement, StudyWrapper, RegisterStudyWrapper, RegisterTextButton, RegiststerDataDiv, SemiWrapper2, StudyContentsUI, StudyRecruit, StudyRecruitIcon, StudyRecruitIconPeople, StudyRecruitTextContentsWrap, StudyRecruitTextContentsWrapIcon, StudyRecruitTextContentsDiv, StudyRecruitText, StudyIcon, StudyLogoImg, StudyTitle, StudyTitleWrapper } from '../styles/StudyStyle';
import People from '../assets/images/people.png'
import eyeIcon from '../assets/images/eyeIcon.png'
import chatBubble from '../assets/images/chatBubble.png'
import moreSee from '../assets/images/moreSee.png'
import boy from '../assets/images/artnjobboy.png'
import { ScrapUIWrapper, Scrapbutton } from '../styles/StudyDetailPageStyle';
const Study = () => {
  const [sortByNewest, setSortByNewest] = useState(false);
    const navigate = useNavigate();
  const [views, setViews] = useState(
    {
    view1: false,
    view2: false,
    view3: false
  });
  
  const [recruitType,setRecruitType] = useState(true);
  const [scrap, setScrap] = useState(false)
  const categoryContents = ['전체', '음악', '디자인 미술', '체육 무용', '기타'];
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  return (
      <>
    <StudyWrapper>
      <StudyTitleWrapper>
      <StudyLogoImg src={boy}/>
      <StudyTitle>STUDY</StudyTitle>
      </StudyTitleWrapper>
      <StudyContents>
        {categoryContents.map((category) => (
          <StudyContentsElement key={category} 
          onClick={() => onCategoryClick(category)} 
          style={{background: category === selectedCategory ? 'linear-gradient(90deg, #FFC642 0%, rgba(255, 238, 199, 0.0260417) 251.08%)' : 'transparent'}}>{category}</StudyContentsElement>
        ))}
      </StudyContents>
      <RegisterWrap>
        <RegisterStudyWrapper>
          < RegiststerDataDiv onClick={()=>{
             setSortByNewest(!sortByNewest);
          }}>최근등록순</RegiststerDataDiv>
          < RegiststerDataDiv>지역</RegiststerDataDiv>
          <SemiWrapper2>
        <SearchingBarWrap>
          <SearchingBar placeholder='제목 + 본문검색' />
        </SearchingBarWrap>
          <RegisterTextButton onClick={()=>{navigate('/StudyForm')}}>
            글쓰기
          </RegisterTextButton >
      </SemiWrapper2>
        </RegisterStudyWrapper>
      </RegisterWrap>
      <StudyContentsUI  > 
        <StudyRecruitIcon onClick={()=>{navigate('/StudyDetailPage')}}>
          <StudyRecruit >
          {
            recruitType === true? <span>모집중</span> : <span>모집완료</span>
          }
          
          </StudyRecruit>
          <StudyRecruitIconPeople>
            <span><img src={People}/></span>
            <span>1/2명</span>
          </StudyRecruitIconPeople>
        </StudyRecruitIcon>
        <StudyRecruitTextContentsWrap onClick={()=>{navigate('/StudyDetailPage')}}>
         <div style={{fontWeight: "600", fontSize:"26px", marginTop:"10px"}}>스터디 구합니다</div>
          <StudyRecruitText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam laboris nisi ut aliquip consequat de...
          </StudyRecruitText>
          <StudyRecruitTextContentsDiv>
            <StudyRecruitTextContentsWrapIcon>8:20</StudyRecruitTextContentsWrapIcon>
            <StudyRecruitTextContentsWrapIcon>서울</StudyRecruitTextContentsWrapIcon>
            <StudyRecruitTextContentsWrapIcon>음악</StudyRecruitTextContentsWrapIcon>
          </StudyRecruitTextContentsDiv>
        </StudyRecruitTextContentsWrap>
        <StudyIcon>
          <div>
            <img src={eyeIcon}></img>
            <span>100</span>
          </div>
          <div>
            <img src={chatBubble}></img>
            <span>2</span>
          </div>
          <ScrapUIWrapper onClick={()=>{
            setScrap(!scrap)
          }} style={{marginLeft:"20px", cursor:"pointer"}}>
            <img src={moreSee}/> 
          </ScrapUIWrapper>
          {
        scrap === true ? <Scrapbutton>스크랩</Scrapbutton> : null
             }
        </StudyIcon>
      </StudyContentsUI>
      </StudyWrapper>
     
      </>
    
 )
}

export default Study;