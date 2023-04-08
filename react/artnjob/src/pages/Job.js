import React from 'react'
import { useState } from 'react';
import Dropdown from '../components/Dropdown ';
import TriangleIcon from '../styles/TriangleIcon';
import { CategoryWrapper,CategoryContents,CategoryContentsElement, SearchingBar, SearchingBarWrap, SemiCategoryWrapper, RegisterWrap, RegisterButton, RegisterWrapper, RegiststerDiv, CardWrap, CardCategory, DataShare, ImgFile, InfoUser, CardCategoryWrapper} from '../styles/jobstyle'
import {SemiWrapper,SemiCategory } from '../styles/jobstyle'




function Job(props) {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);

  return (
    <CategoryWrapper>
      <CategoryContents>
        <CategoryContentsElement>전체</CategoryContentsElement>
        <CategoryContentsElement>음악</CategoryContentsElement>
        <CategoryContentsElement>디자인 미술</CategoryContentsElement>
        <CategoryContentsElement>체육 무용</CategoryContentsElement>
        <CategoryContentsElement>기타</CategoryContentsElement>
      </CategoryContents>
      <SemiWrapper>
        <SemiCategoryWrapper>
          <SemiCategory onClick={() => setView1(!view1)}>
            카테고리{" "}
            {view1 ? <TriangleIcon/> : <TriangleIcon/>}
            {view1 && <Dropdown />}
          </SemiCategory>
          <SemiCategory onClick={() => setView2(!view2)}>
            경력{" "}
            {view2 ? <TriangleIcon/> : <TriangleIcon/>}
            {view2 && <Dropdown />}
          </SemiCategory>
          <SemiCategory onClick={() => setView3(!view3)}>
            지역{" "}
            {view3 ? <TriangleIcon/> : <TriangleIcon/>}
            {view3 && <Dropdown />}
          </SemiCategory>
        </SemiCategoryWrapper>
        <SearchingBarWrap>
          <SearchingBar placeholder='제목 + 본문검색' />
        </SearchingBarWrap>
      </SemiWrapper>
      <RegisterWrap>
        <div>전체 100건</div>
        <RegisterWrapper>
        < RegiststerDiv>최근 등록순</RegiststerDiv>
        <RegisterButton>글쓰기</RegisterButton >
        </RegisterWrapper>
      </RegisterWrap>
      <div>
      <CardWrap>
        <ImgFile></ImgFile>
        <h5>네트워크 엔지니어 채용</h5>
        <CardCategoryWrapper>
        <CardCategory>영상</CardCategory>
        <CardCategory>미술</CardCategory>
        <CardCategory>음악</CardCategory>
        <CardCategory>디자인</CardCategory>
        <CardCategory>무용</CardCategory>
        </CardCategoryWrapper>
        <DataShare>
          <InfoUser>
          서울 구로구 . 
          </InfoUser>
           <InfoUser>
            경력 10년
          </InfoUser>
        </DataShare>
      </CardWrap>
      </div>
    </CategoryWrapper>
  );
}


export default Job