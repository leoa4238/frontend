import styled from "styled-components";


const BottomSheetHeader = ({setIsOpen}) =>{
  return(
    <HearderWrap>
      <MyIcon onClick={()=>{setIsOpen(false)}}>X</MyIcon>
      <h2>{}일정추가하기</h2>
    </HearderWrap>
  );
}

export default BottomSheetHeader

const HearderWrap = styled.div`
  position: relative;
  border-bottom: 1px solid #e9e9e9;
  padding: 20px 0;

  & h2{
    font-size: 20px;
    text-align: center;
    font-weight: normal;
  }
`

const MyIcon = styled.div`
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  cursor: pointer;

`