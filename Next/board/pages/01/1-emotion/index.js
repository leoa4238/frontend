import { InputBox, InputLable, InputWrap, PageTitle } from "../../../styles/emotion";


const EmotionPage = () =>{
    return(
      <>
      <PageTitle>이모션 페이지입니다</PageTitle>
      <InputWrap>
        <InputLable>이름</InputLable>
        <InputBox/>
      </InputWrap>
      </>
    );
}

export default EmotionPage

