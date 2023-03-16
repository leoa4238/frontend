import { useState } from "react";
import companyLogo from '../img/icon.png';
import styled from 'styled-components'
function Membership() {
  const [showResumeForm, setShowResumeForm] = useState(false); // 이력서 양식 표시 여부 상태값 추가

  const handleRegisterClick = () => {
    setShowResumeForm(showResumeForm == true ? false : true); // 이력서 양식 표시 버튼 누르면 눌러지고,한번더 누르면 취소
  }

  return (
    <Container>
      <Job>JOB <div>SEARCH</div></Job>
      <Icon src={companyLogo} />
      <div>
        <SecondIcon src={companyLogo} />
      </div>
      <div>
        <JobBtn onClick={handleRegisterClick}>이력서 또는 구인글 등록</JobBtn>
      </div>
      <div>
        <JobBtn>등록완료</JobBtn>
      </div>

      {/* 이력서 양식을 감싸는 div 요소 추가 */}
      {showResumeForm && (
        <ResumeForm>
          <Opt placeholder="전공분야선택">
            <option value="1">체육</option>
            <option value="2">무용</option>
            <option value="3">연극</option>
            <option value="4">영화</option>
            <option value="5">디자인</option>
            <option value="6">순수미술</option>
            <option value="7">음악</option>
            <option value="8">교육</option>
          </Opt>
          <div>
            <Box ></Box>
            <Box2 >
              <div>
                <InputBox placeholder="전공"></InputBox>
              </div>
              <div>
                <InputBox placeholder="학력"></InputBox>
              </div>
              <div>
                <InputBox placeholder="경력"></InputBox>
              </div>
              <div>
                <InputBox placeholder="관심분야"></InputBox>
              </div>
              <div>
                <InputBox placeholder="자기 소개"></InputBox>
              </div>
              <div>
                <InputBox placeholder="포트폴리오 URL을 첨부해주세요"></InputBox>
              </div>
            </Box2>
          </div>
        </ResumeForm>
      )}
    </Container>
  )
}

export default Membership;

const Container = styled.div`
  position: relative;
`;

const Job = styled.div`
  font-size: 150px;
  font-family: 'Pavanam';
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 106%;
  color: rgba(255, 255, 255, 0.5);
`;

const Icon = styled.img`
  position: relative;
  left: 75%;
  margin: 0;
  right: 0;
`;

const SecondIcon = styled.img`
  position: relative;
  left: 75%;
  margin: 0;
  right: 0px;
  top: 280px auto;
`;
const JobBtn = styled.button`
   background: #173470;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 110px;
  border-style: none;
  width: 274px;
  height: 68px;
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;
  color: white;
  z-index: 1;
  filter: blur(1%);
  transition: all 1s;
  margin-top: 50px;
  &:hover {
    background-color: #e9e9e9;
  }`

const Box = styled.div`
 width: 90%;
height: 126px;
left: 586px;
top: 603px;
margin-bottom: 30px;
  background-color: #EDF2FF;
  border-radius: 10px;
`;

const Box2 = styled.div`
position: relative;
width: 90%;
height: 788px;

background: #EDF2FF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 10px;
`
const InputBox = styled.input`
position: relative;
width: 90%;
height: 77px;
background: #CAE5FF;
border-radius: 17px;
margin-bottom: 5%;
margin-top: 15px;
border-style: none;
left: 20px;
`;
const ResumeForm = styled.div`
  /* 이력서 양식 스타일 */
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 37%;
  
  height: 75rem;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 3s;
`;
const font1 = styled.div`
position: relative;
display: block;
width: 24px;
height: 15px;
display: inline-block;
font-family: 'Roboto';
font-style: normal;
font-weight: 561;
font-size: 13px;
line-height: 15px;
align-items: center;
text-align: center;
color: #1E90FF;
font-stretch: 100;
`

const Opt = styled.select`
  width: 136px;
  height: 38px;
  background: #FFFFFF;
  border-radius: 17px;
  transform: rotate((1, 0, 0, -1, 0, 0));
  position: relative;
  left: 80%;
  margin-bottom: 10%;
`
