import styled from "styled-components";

export const PromotionRegistAside = styled.aside`
position: sticky;
width: 361px;
height: auto;
float: right;
z-index: 9;
background: #FFFFFF;
border: 1.5px solid rgba(243, 216, 121, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), -9px -4px 30px rgba(0, 0, 0, 0.1);
border-radius: 9px;
display: flex;
flex-direction: column;
justify-content: center;
`
export const UserNameText = styled.h3`
 font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
text-align: center;

` 
export const CircleWrap = styled.div`
border-radius: 100%;
width: 150px;
margin: 34px 102px;
border: 3px solid #F4E2BA;
display: flex;
justify-content: center;
img{
   margin: 14px 11px;
}
`
export const PromotionProfilewrap = styled.div`
    margin: 0 auto;
    gap: 3px;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
`
export const PromotionProfileElement = styled.div`
display: flex;
gap: 3px;
`

export const PromotionRegisterButtonWrap = styled.div`
display: flex;
justify-content: center;
`
export const PromotionRegisterButton = styled.button`
background: #EE6E03;
border-radius: 5px;
border: none;
padding: 9px 101px;
margin: 58px 25px 25px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #FFFFFF;
`
export const ProfileCardImg = styled.img`
    width: 150px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 24px;

`