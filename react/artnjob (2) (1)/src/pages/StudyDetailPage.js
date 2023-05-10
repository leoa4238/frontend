import React, { useState } from 'react'
import { Checkbox, TextField } from '@mui/material'
import axios from 'axios'
import StudyTextCard from '../components/TextCard'
import ReplyCard from '../components/ReplyCard'
import ProfileIcon from '../assets/images/ProfileStateicon.png'
import {
  StudyContentTextWrapper,
  StudyDetailCommentWrap,
  StudyDetailCommentWriteWrap,
  StudyDetailCommentWrap2,
  StudyDetailContentsWrapper,
  StudyDetailContentsUIWrap,
  StudyDetailPageWrap,
  StudyDetailTextContentsWrapIcon,
  StudyDetailWrapper,
  StudyElementsWrapper,
  StudyParticipateWrapper,
  StudyProfileIcon,
  StudyProfileNameWrap,
  StudyProfileNameWrap2,
  StudyProfileTextWapper,
  StudyStateWrap,
  StudySubmitButton,
  StudySubmitWrapper,
  StudyTextAreaWrapper,
  StudyTextContentsWrapper,
  StudyTextContentsWrapper3,
  StudyWriterWrapper,
  TextReplyWrapper,
  CheckboxWrapper,
  ProfileFlexWrapper,
  ReplyButton,
} from '../styles/StudyDetailPageStyle'

const data = [
  {
    "category": "영상",
    "content": "string",
    "dead_line": "2023-04-16",
    "email": "string",
    "en_dt": "2023-04-16",
    "person_num": 40,
    "text_num": 11,
    "phone": "string",
    "place": "서울 구로구",
    "preferential": "string",
    "qualifications_needed": "경력 1~10년",
    "recruitment": "string",
    "salary": "string",
    "st_dt": "2023-04-16",
    "title": "스터디 구합니다 선웅님",
    "wet": "디오넷",
    "work_content": "string",
    "wst": "string",
  },
]

const StudyDetailPage = () => {
  const [recruitType, setRecruitType] = useState(true)
  const [textWrite, setTextWrite] = useState('')
  const [comments, setComments] = useState([])
  const [replyBtn, setReplyBtn] = useState(false)

  return (
    <StudyDetailPageWrap>
      <StudyDetailWrapper>
        {data.map(v => (
          <StudyTextCard 
            data={v} 
            recruitType={recruitType} 
            ProfileIcon={ProfileIcon}
          />
        ))}
        {comments?.map((el, i) => (
          <StudyDetailCommentWrap2>
            <div>
              <StudyProfileNameWrap2>
                <ProfileFlexWrapper>
                  <StudyProfileIcon src={ProfileIcon} />
                  <StudyWriterWrapper>
                    <span>글쓴이</span>
                    <span>8:20</span>
                  </StudyWriterWrapper>
                </ProfileFlexWrapper>
              </StudyProfileNameWrap2>
              <TextReplyWrapper>{el}</TextReplyWrapper>
              <ReplyButton onClick={() => setReplyBtn(!replyBtn)}>댓글</ReplyButton>
              {replyBtn && <ReplyCard replyBtn={replyBtn} />}
            </div>
          </StudyDetailCommentWrap2>
        ))}
        <StudyDetailCommentWriteWrap>
          <StudyTextContentsWrapper3>
            <StudyProfileTextWapper>
              <StudyProfileIcon src={ProfileIcon} />
              <StudyProfileNameWrap>
                <span>닉네임</span>
              </StudyProfileNameWrap>
            </StudyProfileTextWapper>
            <StudyTextAreaWrapper>
              <TextField
                onChange={(e) => setTextWrite(e.target.value)}
                id="standard-textarea"
                placeholder="댓글을 작성해주세요"
                multiline
                variant="standard"
                style={{ width: "1000px" }}
              />
            </StudyTextAreaWrapper>
            <StudySubmitWrapper>
              <CheckboxWrapper>
                <Checkbox
                  inputProps={{ 'aria-label': 'Checkbox demo' }}
                  defaultChecked
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
                <span>비밀댓글</span>
              </CheckboxWrapper>
              <StudySubmitButton onClick={() => {
                if (textWrite.trim()) {
                  setComments([...comments, textWrite.trim()]);
                }
                setTextWrite('');
              }}>
                댓글작성
              </StudySubmitButton>
            </StudySubmitWrapper>
          </StudyTextContentsWrapper3>
        </StudyDetailCommentWriteWrap>
      </StudyDetailWrapper>
    </StudyDetailPageWrap>
  )
}

export default StudyDetailPage;