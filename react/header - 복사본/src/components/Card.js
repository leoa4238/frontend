import styled from "styled-components";

const OptBox = () => {
  return (
    <Wrapper>
    이번주 인기분야
    <Btn>음악</Btn>
    <Btn>미술</Btn>
    <Btn>체육</Btn>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Btn = styled.button`
background: #FFFFFF;
box-shadow: 0px 3.76471px 3.76471px rgba(0, 0, 0, 0.1);
border-radius: 3.76471px;
`

export default OptBox;