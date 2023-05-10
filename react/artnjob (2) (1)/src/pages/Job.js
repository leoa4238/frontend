import React from 'react'
import { useState } from 'react';
import Dropdown from '../components/Dropdown ';
import TriangleIcon from '../styles/TriangleIcon';
import { CategoryWrapper, CategoryContents, CategoryContentsElement, SearchingBar, SearchingBarWrap, SemiCategoryWrapper, RegisterWrap, RegisterButton, RegisterWrapper, RegiststerDiv, CardContainer} from '../styles/jobstyle'
import { SemiWrapper, SemiCategory, } from '../styles/jobstyle'
import { useNavigate } from 'react-router-dom';
import CompanyCard from '../components/CompanyCard';

// 이부분을 데이터 받아왔다고 가정..
const data = [
  {
    "category": "영상",
    "content": "string",
    "dead_line": "2023-04-16",
    "email": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "phone": "string",
    "place": "서울 구로구",
    "preferential": "string",
    "qualifications_needed": "경력 1~10년",
    "recruitment": "string",
    "salary": "string",
    "st_dt": "2023-04-16",
    "title": "네트워크 엔지니어 채용",
    "wet": "디오넷",
    "work_content": "string",
    "wst": "string"
  },
  {
    "category": "음악",
    "content": "string",
    "dead_line": "2023-04-16",
    "email": "string",
    "en_dt": "2023-04-16",
    "person_num": 0,
    "phone": "string",
    "place": "서울 강남구",
    "preferential": "string",
    "qualifications_needed": "경력 무관",
    "recruitment": "string",
    "salary": "string",
    "st_dt": "2023-04-16",
    "title": "음악 교습소 직원 모집",
    "wet": "바흐 음악교실",
    "work_content": "string",
    "wst": "string"
  }
]



const Job = () => {
  
  const navigate = useNavigate();
  const [views, setViews] = useState(
    {
    view1: false,
    view2: false,
    view3: false
  });
  const [sortByNewest, setSortByNewest] = useState(false);
  const toggleView = (view) => {
    setViews({ ...views, [view]: !views[view] });
  };

  const categoryContents = ['전체', '음악', '디자인 미술', '체육 무용', '기타'];
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <CategoryWrapper>
      <CategoryContents>
        {categoryContents.map((category) => (
          <CategoryContentsElement key={category} 
          onClick={() => onCategoryClick(category)} 
          style={{background: category === selectedCategory ? 'linear-gradient(90deg, #FFC642 0%, rgba(255, 238, 199, 0.0260417) 251.08%)' : 'transparent'}}>{category}</CategoryContentsElement>
        ))}
      </CategoryContents>
      <SemiWrapper>
      <SemiCategoryWrapper>
          <SemiCategory onClick={() => toggleView('view1')}>
            카테고리 <TriangleIcon />
            {views.view1 && <Dropdown />}
          </SemiCategory>
          <SemiCategory onClick={() => toggleView('view2')}>
            경력 <TriangleIcon />
            {views.view2 && <Dropdown />}
          </SemiCategory>
          <SemiCategory onClick={() => toggleView('view3')}>
            지역 <TriangleIcon />
            {views.view3 && <Dropdown />}
          </SemiCategory>
        </SemiCategoryWrapper>
        <SearchingBarWrap>
          <SearchingBar placeholder='제목 + 본문검색' />
        </SearchingBarWrap>
      </SemiWrapper>
      <RegisterWrap>
        <div>전체 100건</div>
        <RegisterWrapper>
          < RegiststerDiv onClick={()=>{
             setSortByNewest(!sortByNewest);
          }}>최근 등록순</RegiststerDiv>
          <RegisterButton onClick={()=>{navigate('/Form')}}>
            글쓰기
          </RegisterButton >
        </RegisterWrapper>
      </RegisterWrap>
      <CardContainer>

        {
          data.map(
            (v)=>
              <CompanyCard data={v}/>
          )
        }
        
      </CardContainer>
    </CategoryWrapper>
  );
}




export default Job