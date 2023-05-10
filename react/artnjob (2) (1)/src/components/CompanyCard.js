import { CardDetailText, CardTitle, CardWrap, CategoryBox, CategoryWrap, CompanyText } from "../styles/jobstyle";
const CompanyCard = (props)=>{
  const {data, ...restProps} = props;

  return(
    <CardWrap>
      <img src='https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHw%3D&w=1000&q=80'/>
      <CompanyText>{data.wet}</CompanyText>
      <CardTitle>{data.title}</CardTitle>
      <CategoryWrap>
        <CategoryBox>{data.category}</CategoryBox>
      </CategoryWrap>
      <CardDetailText>{data.place} | {data.qualifications_needed}</CardDetailText>
    </CardWrap>
  );
}

export default CompanyCard;