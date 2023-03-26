import styled from "@emotion/styled";


export const PageTitle = styled.h1`
  color: red;
  text-align: center;
`

export const InputWrap = styled.div`
  width: 200px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex; //수직정렬을 주어야하기 때문에
  flex-direction: column;
  padding: 20px;
`;

export const InputLable = styled.label`
  color: #e9e9e9;
  font-size: 12px;
`;

export const InputBox = styled.input`
  border-color: blue;
  outline: none;
`;