
import React, { useState } from 'react'
import { BorderKeyword, InputWrapKeyword, KeyWordInputflex, ProfileTitle, PromotioTextForm, PromotionFormWrap, PromotionInput1, PromotionInput2, PromotionInput3, PromotionInput3Button, PromotionInputWrapper, PromotionTextWrap } from '../styles/promotionFormstyle';
import { CircleWrap, PromotionProfileElement, PromotionProfilewrap, PromotionRegistAside, PromotionRegisterButton, PromotionRegisterButtonWrap, UserNameText } from '../styles/Promotionstyle';
import mail from '../assets/images/Mail.png'
import Profile from '../assets/images/profileicon.png'
import Phone from '../assets/images/Phone.png'
import location from '../assets/images/LocationIcon.png'
import website from '../assets/images/webSite.png'
const PromotionDetailPage = () => {
  const [plus, setPlus] = useState([]);
  const [write, setWrite] = useState('');
    return (
      <PromotionFormWrap>
        <PromotionProfilewrap>
          <ProfileTitle>홍보게시판</ProfileTitle>
        </PromotionProfilewrap>
        <PromotionRegistAside>
        <CircleWrap>
          <img src={Profile}></img>
        </CircleWrap>
        <UserNameText>홍길동</UserNameText>
        <PromotionProfilewrap>
        <PromotionProfileElement>
          <span>
            <img src={mail}/>
          </span>
          <span>asd1234@naver.com</span>
        </PromotionProfileElement>
        <PromotionProfileElement>
          <span>
          <img src={Phone}/>
          </span>
          <span>010-0000-0000</span>
        </PromotionProfileElement>
        <PromotionProfileElement>
          <span>
            <img src={location}></img>
          </span>
          <span>서울특별시</span>
        </PromotionProfileElement>
        <PromotionProfileElement>
          <span>
            <img src={website}></img>
          </span>
          <span>
            www.naver.com
          </span>
        </PromotionProfileElement>
        </PromotionProfilewrap>
        <PromotionRegisterButtonWrap>
          <PromotionRegisterButton>등록하기</PromotionRegisterButton>
        </PromotionRegisterButtonWrap>
        </PromotionRegistAside>
        <PromotionTextWrap>
          <PromotioTextForm>
          <PromotionInputWrapper>
            <span>제목</span>
            <PromotionInput1 placeholder="제목을 입력해주세요"/>
          </PromotionInputWrapper>
          <PromotionInputWrapper>
            <span>키워드</span>
            <InputWrapKeyword>
            <KeyWordInputflex>
            <PromotionInput3 onChange={
              (e)=>{setWrite(e.target.value)
              
              }
            } placeholder="키워드를 입력해주세요"/>
            <PromotionInput3Button variant="outlined" onClick={
              ()=>{
                if (write.trim() !== '') {
                  const copy = [...plus];
                  copy.push(write.trim());
                  setPlus(copy);
                }
              }
            }>추가</PromotionInput3Button>
             </KeyWordInputflex>
             <div>
             
            {plus.map((e,i)=>{
              return(
                <>
              <BorderKeyword><span>{plus[i]}</span></BorderKeyword>
              <button onClick={()=>{
                let copy = [...plus]
                copy.splice(i, 1);
                setPlus(copy);
              }}>x</button>
                </>
              )
            })}
            </div>
            </InputWrapKeyword>
          </PromotionInputWrapper>
          <PromotionInputWrapper>
            <span>자기소개</span>
            <PromotionInput2
            id="filled-textarea"
            label="한줄 소개"
            placeholder="자신을 어필 할 수 있는 소개를 해주세요!"
            multiline ="true"
           />
          </PromotionInputWrapper>
          </PromotioTextForm>
        </PromotionTextWrap>
      </PromotionFormWrap>
    )
}

export default PromotionDetailPage;