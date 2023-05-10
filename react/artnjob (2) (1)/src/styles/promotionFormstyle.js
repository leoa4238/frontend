import styled from "styled-components";
import backgroundImgComputer from "../assets/images/backgroundImgComputer.png"
import { Textarea } from "@mui/joy";
import Button from '@mui/material/Button';

export const PromotionFormWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Plus Jakarta Sans';
  border:1px solid black;
  @media screen and (max-width: 768px) {
  background-position: top;
}
`

export const PromotionProfileWrap = styled.div`
  border:1px solid black;
  background-image: url(${backgroundImgComputer});
  background-size: cover;
  background-position: center;
  filter: drop-shadow(4px 17px 4px rgba(0, 0, 0, 0.37));
`

export const ProfileTitle = styled.h2`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  margin-top: 286px;
  margin-left: 72px;
  margin-bottom: 52px;
  color: #ffff;
  
  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin-top: 100px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
`

export const PromotionTextWrap = styled.div`
  width: 100%;
`

export const PromotioTextForm = styled.div`
  width: 741px;
  border: 1px solid #D6BD65;
  box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.07);
  border-radius: 9px;
  margin-top: 57px;
  margin-left: 45px;
  margin-bottom: 48px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }
`

export const PromotionInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 90px 39px;

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`


// export const PromotionInput1 = styled.input`
//   background-color: #FCFBE9;
//   border: 1px solid rgba(240, 180, 39, 0.5);
//   border-radius: 4px;
//   width: 657px;
//   @media screen and (max-Width: 768px){
//     width: 100%;
//     margin-bottom: 10px
//   }
// `
// export const PromotionInput2 = styled.textarea`
//   background-color: #FCFBE9;
//   border: 1px solid rgba(240, 180, 39, 0.5);
//   border-radius: 4px;
//   width: 657px;
//   height: auto;
//   overflow-y: scroll;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
//     border-radius: 10px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #888;
//     border-radius: 10px;
//   }

//   @media screen and (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 10px;
//   }
// `;


// export const PromotionInput3 = styled.input`
//  background-color: #FCFBE9;
//   border: 1px solid rgba(240, 180, 39, 0.5);
//   border-radius: 4px;
//   width: 250px;
//   @media screen and (max-Width: 768px){
//     width: 100%;
//     margin-bottom: 10px
//   }
//   `



export const PromotionInput3Button = styled(Button)({
width:"35px"
})
export const PromotionInput3ButtonWrap = styled.div`
display: flex;
`
export const InputWrapKeyword = styled.div`
display: flex;
gap: 5px;
flex-direction: column;
`
export const BorderKeyword = styled.div`
border: 2px solid #DFCF3C;
border-radius: 20px;
display: inline-block;
padding: 5px 10px;
`
export const KeyWordInputflex = styled.div`
display: flex;
`

export const PromotionInput1 = styled(Textarea)({
  width:"657px",
  backgroundColor: "#FCFBE9",
  border: "1px solid rgba(240, 180, 39, 0.5)",
  borderRadius: "4px",
  height: "48px",

   '@media screen and (maxWidth: 768px)':{
    width: "100%",
    marginBottom: "10px"
  }
})

export const PromotionInput2 =styled(Textarea)({
  backgroundColor: "#FCFBE9",
  border: "1px solid rgba(240, 180, 39, 0.5)",
  borderRadius: "4px",
  width: "657px",
  '@media screen and (maxWidth: 768px)':{
    width: "100%",
    marginBottom: "10px"
  }

})

export const PromotionInput3 = styled(Textarea)({
  width:"250px",
  backgroundColor: "#FCFBE9",
  border: "1px solid rgba(240, 180, 39, 0.5)",
  borderRadius: "4px",
  height: "48px",
  '@media screen and (maxWidth: 768px)':{
    width: "100%",
    marginBottom: "10px"
  }

})