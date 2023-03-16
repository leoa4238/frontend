import styled from "styled-components"

const SchedularListCardText = (props) =>{

return(
  <CardTextWrap>
    <h4>{props.title}</h4>
    <p>{props.sTime} - {props.eTime}</p>
    <p>{props.detail}</p>
  </CardTextWrap>
);

}

export default SchedularListCardText

const CardTextWrap = styled.div`

 & h4{
  
 }
`