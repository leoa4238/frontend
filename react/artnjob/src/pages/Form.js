import React from 'react'
import { FormTitle, FormWrap, FormWrapper, HeaderImgWrap,WriteFormWrapper, ImgTag, ImgTagIcon, InputTitleWrapper,InputFormWrapper, ImgTagIconButton, InputTag, Sunghyunwrapper, BussinessWrap, IntroService, InputSpan, InputSpanWrap, ArtnJobWrapper, ArtnJobWrapperInputButton, ArtnJobWrapperInputWrap, ArtnJobWrapperInput, ArtnJobWrapperInputWrapper, CalenderWrap, RegisterButton, RegisterButtonWrap, ButtonAdd} from '../styles/formSrtyle';
import Rectangle from '../assets/images/icon3.png'
import infoIcon from '../assets/images/icon4.png'


const Form = () => {
  return (
    <WriteFormWrapper>
      <HeaderImgWrap>
        <ButtonAdd>
          <span>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9 3.12817H16.8116L16.0672 0.985431C15.967 0.697696 15.7799 0.448244 15.5316 0.271669C15.2833 0.0950944 14.9863 0.000148953 14.6816 3.00626e-08H7.29865C6.99237 -6.19733e-05 6.69376 0.0957876 6.44473 0.274095C6.19571 0.452402 6.00877 0.704214 5.91016 0.994185L5.18383 3.12817H1.10002C0.808374 3.1285 0.528771 3.2445 0.322549 3.45072C0.116327 3.65694 0.000327545 3.93655 0 4.22819V18.5284C0.000327545 18.82 0.116327 19.0996 0.322549 19.3059C0.528771 19.5121 0.808374 19.6281 1.10002 19.6284H20.9C21.1916 19.6281 21.4712 19.5121 21.6775 19.3059C21.8837 19.0996 21.9997 18.82 22 18.5284V4.22819C21.9997 3.93655 21.8837 3.65694 21.6775 3.45072C21.4712 3.2445 21.1916 3.1285 20.9 3.12817ZM20.5333 18.1617H1.46701V4.59486H6.2342L7.29865 1.46669H14.6816L15.7684 4.59486H20.5333V18.1617Z" fill="white" />
              <path d="M11 5.69482C9.96656 5.69482 8.95634 6.00127 8.09708 6.57541C7.23782 7.14955 6.56811 7.96559 6.17264 8.92035C5.77717 9.87511 5.67369 10.9257 5.8753 11.9393C6.07691 12.9528 6.57455 13.8838 7.30529 14.6146C8.03603 15.3453 8.96705 15.843 9.98062 16.0446C10.9942 16.2462 12.0448 16.1427 12.9995 15.7472C13.9543 15.3518 14.7703 14.6821 15.3445 13.8228C15.9186 12.9635 16.2251 11.9533 16.2251 10.9199C16.2235 9.53461 15.6725 8.20651 14.6929 7.22696C13.7134 6.24741 12.3853 5.6964 11 5.69482ZM11 14.6783C10.2566 14.6783 9.53 14.4579 8.91193 14.0449C8.29387 13.6319 7.81215 13.0449 7.52768 12.3582C7.24322 11.6714 7.16879 10.9157 7.31381 10.1867C7.45883 9.45762 7.81678 8.78794 8.3424 8.26232C8.86802 7.7367 9.5377 7.37875 10.2668 7.23373C10.9958 7.08871 11.7515 7.16314 12.4383 7.4476C13.125 7.73207 13.712 8.21379 14.125 8.83185C14.5379 9.44992 14.7584 10.1766 14.7584 10.9199C14.7572 11.9163 14.3609 12.8716 13.6563 13.5762C12.9517 14.2808 11.9964 14.6772 11 14.6783Z" fill="white" />
            </svg>
          </span>
          사진추가
        </ButtonAdd>
      </HeaderImgWrap>
        <FormWrap>
        <aside></aside>
        <FormWrapper>
          <FormTitle>채용정보를 입력해주세요</FormTitle>
          <InputFormWrapper>
            <InputTitleWrapper>
              <ImgTag src={Rectangle}></ImgTag>
              공고제목
              <ImgTagIconButton>
            <ImgTagIcon src={infoIcon}></ImgTagIcon>
              </ImgTagIconButton>
            </InputTitleWrapper>
            <InputTag></InputTag>
          </InputFormWrapper>
          <InputFormWrapper>
          <InputTitleWrapper>
          <Sunghyunwrapper>
            <BussinessWrap>
            <span>
          <ImgTag src={Rectangle}></ImgTag>
            사업체명
            </span>
            <input></input>
            </BussinessWrap>
            <BussinessWrap>
            <span>
          <ImgTag src={Rectangle}></ImgTag>
            대표자명
            </span>
            <input></input>
            </BussinessWrap>
          </Sunghyunwrapper>
          </InputTitleWrapper>
          </InputFormWrapper>
            <div>
            <div>썸네일 사진 추가</div>
            <ImgTagIcon src={infoIcon}></ImgTagIcon>
            <div>
            <button>button</button>
            </div>
          </div>
          <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>사업장 주소</div>
          </InputTitleWrapper>
            <InputTag></InputTag>
          <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>
              웹사이트
            </div>
          </InputTitleWrapper>
            <InputTag></InputTag>
           <InputSpanWrap>
            <InputSpan>
          <ImgTag src={Rectangle}></ImgTag>
            <div>사업체/서비스 소개</div>
            </InputSpan>
            <IntroService></IntroService>
          </InputSpanWrap>
          <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>카테고리</div>
            <div>
            <select>한국</select>
            </div>
          </InputTitleWrapper>
          <InputFormWrapper>
            <InputTitleWrapper>
              <ImgTag src={Rectangle}></ImgTag>
              요구스킬
              <ImgTagIconButton>
            <ImgTagIcon src={infoIcon}></ImgTagIcon>
              </ImgTagIconButton>
            </InputTitleWrapper>
          </InputFormWrapper>
          <ArtnJobWrapper>
            <ArtnJobWrapperInputWrapper>
              <ArtnJobWrapperInputWrap>
              <ArtnJobWrapperInput></ArtnJobWrapperInput>
              <ArtnJobWrapperInputButton placeholder='요구스킬을 하나씩 추가해 주세요'>추가</ArtnJobWrapperInputButton>
              </ArtnJobWrapperInputWrap>
            </ArtnJobWrapperInputWrapper>
            </ArtnJobWrapper>
            <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>채용마감일</div>
          </InputTitleWrapper>
            <CalenderWrap>
            <input></input>
            <div>MUI 달력들어갈 곳</div>
              <span>체크박스</span>
              <div>상시모집</div>
            </CalenderWrap>
          <div>
          <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>경력</div>
          </InputTitleWrapper>
            <CalenderWrap>
            <input></input>
              체크박스
              <span>신입가능</span>
              </CalenderWrap>  
          </div>
          <div>
          <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>학력</div>
          </InputTitleWrapper>
          <CalenderWrap>
          <input placeholder='ex)2 년'></input>
          <div> - </div>
          <input placeholder='ex)4 년'></input>
          <div>학력무관</div>
          </CalenderWrap>
          </div>
          <div>
          <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>모집인원</div>
          </InputTitleWrapper>
            <CalenderWrap>
            <input></input>
              <div>체크박스</div>
              <div>학력무관</div>
            </CalenderWrap>
          </div>
          <div>
          <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>모집인원</div>
          </InputTitleWrapper>
           <input placeholder='ex)00명'></input>
          </div>
     
        <div>
        <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>주요업무</div>
          </InputTitleWrapper>
          <IntroService></IntroService>
        </div>
        <div>
        <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>자격요건</div>
          </InputTitleWrapper>
          <IntroService></IntroService>
        </div>
        <div>
        <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>우대사항</div>
          </InputTitleWrapper>
          <IntroService></IntroService>
        </div>
        <div>
        <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>복지 혜택</div>
          </InputTitleWrapper>
          <IntroService></IntroService>
        </div>
        <div>
        <InputTitleWrapper>
          <ImgTag src={Rectangle}></ImgTag>
            <div>유의사항</div>
          </InputTitleWrapper>
          <IntroService></IntroService>
        </div>
        <RegisterButtonWrap>
        <RegisterButton>등록</RegisterButton>
        <RegisterButton>미리보기</RegisterButton>
        <RegisterButton>임시저장</RegisterButton>
        </RegisterButtonWrap>
        </FormWrapper>
        </FormWrap >
     </WriteFormWrapper>
  )
}

export default Form;


