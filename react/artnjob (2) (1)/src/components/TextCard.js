import React from 'react'
import { StudyContentsWrapper, StudyDetailContentsUIWrap, StudyDetailTextContentsWrapIcon, StudyElementsWrapper, StudyParticipateWrapper, StudyProfileIcon, StudyProfileNameWrap, StudyStateWrap, StudyTextContentsWrapper } from '../styles/StudyDetailPageStyle'
import { StudyRecruit } from '../styles/StudyStyle'


const StudyTextCard = (props) => {
  const {data, ...restProps} = props;

  return (
    <StudyDetailContentsUIWrap>
    <StudyStateWrap>
      <StudyRecruit>
        {
         props.recruitType === true ? <span>모집중</span> : <span>모집완료</span>
        }
      </StudyRecruit>
      <StudyDetailTextContentsWrapIcon>음악</StudyDetailTextContentsWrapIcon>
    </StudyStateWrap>
    <StudyTextContentsWrapper>
      <StudyProfileIcon src={props.ProfileIcon} />
      <StudyProfileNameWrap>
        <span>글쓴이</span>
        <span>서울 · 8:20</span>
      </StudyProfileNameWrap>
    </StudyTextContentsWrapper>
    <StudyContentsWrapper>
      <h2>{data.title}</h2>
      <div>{data.content}</div>
      <StudyParticipateWrapper>
        <StudyElementsWrapper>
          <span>조회</span>
          <span>{data.person_num}</span>
        </StudyElementsWrapper>
        <StudyElementsWrapper>
          <span>댓글</span>
          <span>{data.text_num}</span>
        </StudyElementsWrapper>
        <StudyElementsWrapper>
          <span>참여자</span>
          <span>1/2</span>
        </StudyElementsWrapper>
      </StudyParticipateWrapper>
    </StudyContentsWrapper>
  </StudyDetailContentsUIWrap>
  )
}

export default StudyTextCard;