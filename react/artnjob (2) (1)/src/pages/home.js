import { MainContentsBox, MainImg, MainTextImg, MainWrap } from "../styles/home.style";
import mainImg from "../assets/images/그림림 2.png";

const Home = ()=>{

  return(
    <>
      <MainWrap>
        <MainTextImg>
          <h2>
            문화 예술 채용을 편리하게 <br/>
             <span>아트앤잡</span>에 오신 것을 환영합니다!
          </h2>
          <p>아트앤잡은 프리랜서와 기업채용 정보를 제공하는 대표적인 구인구직 사이트 입니다</p>
          <MainImg src={mainImg} />
        </MainTextImg>
        <MainContentsBox>
        </MainContentsBox>

      </MainWrap>
    </>
  );
}

export default Home;