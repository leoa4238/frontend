import styled from "styled-components";


export const CategoryWrapper = styled.div`
  width: 1176px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 39px 23px 12px 12px;
`

export const CategoryContents = styled.ul`
display: flex;
list-style: none; 
justify-content: space-around;
border: 2.5px solid rgba(238, 110, 3, 0.2);
border-radius: 47.5px;
`
export const CategoryContentsElement = styled.li`
padding: 17px 0;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 150%;
border-radius: 24px;
&:hover{
  background: linear-gradient(90deg, #FFC642 0%, rgba(255, 238, 199, 0.0260417) 251.08%);
  transition: 3s;
  width: 281px;
  text-align: center;
}
`
export const SemiWrapper = styled.div`
width: 100%;
border: 1px solid red;
display: flex;
`

export const SemiCategory = styled.ul`
width: 144px;
height: 40px;
transition: 3s;
background-color: #FCFBE9;
border: 1px solid rgba(240, 180, 39, 0.5);
border-radius: 13px;
padding: 6px 5px 17px 13px;
text-align: center;
align-items:center;
list-style:none;
margin-right: 11px;
align-items:center;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 21px;
color: rgba(100, 100, 100, 1);
`

export const SemiCategoryWrapper = styled.div`
display: flex;
align-items:center
`


export const SearchingBarWrap = styled.div`

margin-left:349px ;
border: 2.5px solid rgba(0, 0, 0, 0.2);
border-radius: 13px;
width: 359px;
display: flex;
height: 50px;
align-items:center
`

export const SearchingBar = styled.input`
width:100%;
border: 1px none black;
    padding-right: 132px;
`
export const RegisterWrap = styled.div`
  display: flex;
  align-items:center
`

export const RegisterWrapper = styled.div`
display: flex;
align-items: center;
gap:10px;
margin-left:860px

`

export const RegiststerDiv = styled.div`

`

export const RegisterButton = styled.button`
background: #82B52E;
border: 2.5px solid #709D25;
border-radius: 13px;
padding: 12px 25px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
text-align: center;
letter-spacing: -0.07em;
color: #FFFFFF;

`

export const CardWrap = styled.div`
width: 257px;
height: 369px;
box-shadow: 0px 16px 33px 1px rgba(0, 0, 0, 0.15);
border-radius: 19px;
margin: 0px 0px 36px 36px;

h5{
  text-align:center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  
}

`

export const CardCategoryWrapper = styled.span`
display: flex;
justify-content: center

`


export const CardCategory = styled.span`
justify-content:center;
width: 34px;
height: 21px;
background: rgba(255, 255, 255, 0.37);
border: 1.7px solid #A2DF3C;
border-radius: 6px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
text-align: center;
color: #587A20;
`




export const DataShare = styled.div`
  display: flex;
  justify-content:center
  
`

export const InfoUser = styled.span`
padding-left: 10px;

`


export const ImgFile = styled.div`
background-image: url(/backgroundimg.png);
width: 100%;
height: 50%;
`

export const wholeText = styled.div`

`
export const CardWrapper = styled.div`
 
`