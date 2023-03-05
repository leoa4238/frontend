import { useState } from "react";
import companyLogo from '../img/icon.png';
import styled from 'styled-components'
function Membership() {
  const [showResumeForm, setShowResumeForm] = useState(false); // 이력서 양식 표시 여부 상태값 추가

  const handleRegisterClick = () => {
    setShowResumeForm(showResumeForm == true ? false: true); // 이력서 양식 표시 버튼 누르면 눌러지고,한번더 누르면 취소
  }

  return (
    <Container>
      <Job>JOB <div>SEARCH</div></Job>
      <Icon src={companyLogo} />
      <div>
        <SecondIcon src={companyLogo}/>
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
          {/* 이력서 양식의 내용 */}
          {/* <Inputs>
            <Input style={{ top: '0' }}/>
            <Input style={{ top: '20px' }}/>
            <Input style={{ top: '40px' }}/>
            <Input style={{ top: '60px' }}/>
          </Inputs> */}
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
  left: 65%;
  margin: 0;
  right: 0;
`;

const SecondIcon = styled.img`
  position: relative;
  left: 65%;
  margin: 0;
  right: 0px;
  top: 280px auto;
`;

const Inputs = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 222px;
  height: 20px;
  position: relative;
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

  const ResumeForm = styled.div`
    /* 이력서 양식 스타일 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 826px;
    height: 850px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 3s;
  `;