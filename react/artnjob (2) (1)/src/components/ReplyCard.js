import React, { useState } from 'react'
import { CheckboxWrapper, ReplyWrapper, StudyProfileIcon, StudyProfileNameWrap, StudyProfileTextWapper, StudyReplyIconStyle, StudySubmitButton, StudySubmitWrapper, StudyTextAreaWrapper, StudyTextContentsWrapper3 } from '../styles/StudyDetailPageStyle';
import { Checkbox, TextField } from '@mui/material';
import ProfileIcon from '../assets/images/ProfileStateicon.png'
const ReplyCard = (props) => {
  const [textWrite, setTextWrite] = useState(' ')
  const [comments, setComments] = useState([]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  //댓글을 달았을 때 해당 댓글에 답글을 달 수 있도록 만들어줘야한다
  //지금은 댓글을 눌렀을때 수정사항에 대한 부분과, 답글에 대해서 구현이 안되고 있는 상태이다

  
  return (
    
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
    onChange={(e)=>{
      console.log(e.target.value)
      setTextWrite(e.target.value)
    }}
      id="standard-textarea"
      placeholder="댓글을 작성해주세요"
      multiline
      variant="standard"
      style={{width:"1000px"}}
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
    <StudySubmitButton onClick={()=>{ 
      setComments([...comments, textWrite]);
           setTextWrite('');}}>
      댓글작성
    </StudySubmitButton>
    </StudySubmitWrapper>
  </StudyTextContentsWrapper3>
  </ReplyWrapper>
  )
}

export default ReplyCard