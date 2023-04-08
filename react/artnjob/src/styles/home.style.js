import styled from "styled-components";

export const MainWrap = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;

  background-color: #fcfbe9;

  display: flex;
  justify-content: space-between;

  box-shadow: 0 4px 4px 0 rgba(0, 0 ,0, 9%);

  align-items: center;

  @media screen and (max-width:768px){
    flex-direction: column;
  }
`;

export const MainTextImg = styled.div`
  

  & > h2{
    font-size: 30px;
    line-height: 44.7px;
    color: #7b5602;


    span{
      color: #533b01;
    }
  }

  & > p{

    color: #ffba28;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -2%;
  }
`;

export const MainImg = styled.img`
width: 100%;

`;

export const MainContentsBox = styled.div`
  background-color: #ffefc8;
  width: 543px;
  height: 464px;

`;

