import { CardDetailText, CardTitle, CardWrap, CategoryBox, CategoryWrap, CompanyText } from "../styles/jobstyle";
import Profile from '../assets/images/profileicon.png'
import { ProfileCardImg } from "../styles/Promotionstyle";
const PromotionCard = (props)=>{
  const {data, ...restProps} = props;

  return(
    <CardWrap>
      <ProfileCardImg src={Profile}/>
      <CompanyText>{data.wet}</CompanyText>
      <CardTitle>{data.title}</CardTitle>
      <CategoryWrap>
        <CategoryBox>{data.category}</CategoryBox>
      </CategoryWrap>
      <CardDetailText>{data.place} | {data.qualifications_needed}</CardDetailText>
    </CardWrap>
  );
}

export default PromotionCard;