import styled from "styled-components";

const OptBox = () => {
  return (
    <>
      <Wrapper>
        <div>
          <Title>이번주 인기 분야</Title>
          <Btn>음악</Btn>
          <Btn>미술</Btn>
          <Btn>체육</Btn>
          <Btn>연기</Btn>
          <Btn>뮤지컬</Btn>
          <Btn>헬스</Btn>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 561px;
  height: 132px;
  margin: 32px auto;
  padding: 8px;
  border-radius: 10px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 768px) {
    margin: 32px 0;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Btn = styled.button`
  background: #e9e9e9;
  box-shadow: 0px 3.76471px 3.76471px rgba(0, 0, 0, 0.1);
  border-radius: 3.76471px;
  border-style: hidden;
  margin-right: 8px;
`;

export default OptBox;