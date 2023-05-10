import React, { useState } from 'react'
import { Checkbox, TextField } from '@mui/material'
import axios from 'axios'
import StudyTextCard from '../components/TextCard'
import ReplyCard from '../components/ReplyCard'
import ProfileIcon from '../assets/images/ProfileStateicon.png'
import {

  StudyDetailCommentWriteWrap,
  StudyDetailCommentWrap2,
  StudyDetailPageWrap,
  StudyDetailWrapper,
  StudyProfileIcon,
  StudyProfileNameWrap,
  StudyProfileNameWrap2,
  StudyProfileTextWapper,
  StudySubmitButton,
  StudySubmitWrapper,
  StudyTextAreaWrapper,
  StudyTextContentsWrapper3,
  StudyWriterWrapper,
  TextReplyWrapper,
  CheckboxWrapper,
  ProfileFlexWrapper,
  ReplyButton,
  StudyReplyIconStyle,
  ReplyWrapper,
} from '../styles/StudyDetailPageStyle'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const data = 
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
    "title": "스터디 구합니다",
    "wet": "디오넷",
    "work_content": "string",
    "wst": "string",
  }


const StudyDetailPage = () => {
  const [recruitType, setRecruitType] = useState(true)
  const [textWrite, setTextWrite] = useState('')
  const [comments, setComments] = useState([])
  const [replyBtn, setReplyBtn] = useState(false)

  return (
    <StudyDetailPageWrap>
      <StudyDetailWrapper>
        
          <StudyTextCard
            data={data}
            recruitType={recruitType}
            ProfileIcon={ProfileIcon}
          />
        
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
              {replyBtn &&
                <ReplyWrapper>
                  <StudyTextContentsWrapper3>
                    <StudyProfileTextWapper>
                      <StudyReplyIconStyle src={ProfileIcon} />
                      <StudyProfileNameWrap>
                        <span>닉네임</span>
                      </StudyProfileNameWrap>
                    </StudyProfileTextWapper>
                    <StudyTextAreaWrapper>
                      <TextField
                        onChange={(e) => {
                          setTextWrite(e.target.value)
                        }}
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
                          {...label}
                          defaultChecked
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />
                        <span>비밀댓글</span>
                      </CheckboxWrapper>
                      <div>

                      </div>
                      <StudySubmitButton onClick={() => {
                        setComments([...comments, textWrite]);
                        setTextWrite('');
                      }}>
                        댓글작성
                      </StudySubmitButton>
                    </StudySubmitWrapper>
                  </StudyTextContentsWrapper3>
                </ReplyWrapper>
              }
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
                value={textWrite}
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