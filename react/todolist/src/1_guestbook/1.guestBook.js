//방명록 페이지로 사용할 것이다
import { useRef, useState } from 'react';
import Header from '../components/header'
import SideBar from '../components/sideBar'
import styled from 'styled-components';
import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const GuestBookPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [names, setNames] = useState(['안성현', '김철수', '홍길동']); //1.배열을 만들어놨다
  const [inputTxt, setInputTxt] = useState('')
  const nameInput = useRef(null)

  const onCancel = (name) => {
    console.log('x버튼 클릭됨')
    let ar = names.filter(value => value != name);
    setNames(ar);
  }

  const nameList = names.map(
    (value) => //매개변수를 가져온것은 배열의 첫번째부터 시작된다
      <GuestBookListCard>{value}
        <IconButton value={value} onClick={() => { onCancel(value) }}>
          <Close />
        </IconButton>
      </GuestBookListCard>
  );

  // input 태그에 입력 된 값이 변화할 때마다 실행되는 함수
  const inputChange = (e) => {
    //매개변수 e에는 event관련 객체가 들어 있다
    //어떤 태그에서 발생한 이벤트인지, x축, y축, 이벤트 종류,....
    let tmp = setInputTxt(e.target.value) //인풋태그 안에 들어있는 값을 받아오고 있는 것이다 

  }
  const buttonClick = () => {
    //input 태그 속 내용이 비어있다면 alert()함수를 실행하여 필수값  입력하고 이야기 한 후 함수 종료
    // if(inputTxt){
    //   alert('필수입력값입니다')
    //   return;
    // }


    if (!nameInput.current.value) {
      alert('필수입력값입니다!')
      return;
    }

    let tmp = [...names, inputTxt]; //기존에 들어있는 값에다가 입력한값까지해서 추가되고
    setNames(tmp) //바뀌고
    setInputTxt('') //inputtxt값을 빈 문자열로 바꿔줘 value가 존재하기때문에 '이름을 입력이 뜨는 것이다'
    //input 태그를 찾아서 focus 시키기
    // let target = document.querySelector('input')
    // console.log(target.focus)
    // target.focus();   ===> 절대 이렇게 쓰지 않는다

    console.log(nameInput.current);
    nameInput.current.focus()

  }

  return (
    <>
      <Header
        subtitle={'온라인 방명록'}
        detail={'본인의 이름을 작성한 후 추가해 보세요'}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ContentWrap>
        <h2>방명록</h2>
        <InputDiv>
          <input
            ref={nameInput}
            onChange={inputChange}
            type={'text'}
            placeholder={'이름을 입력'}
            value={inputTxt}
          ></input>
          <button type='button' onClick={buttonClick}>추가하기</button>
        </InputDiv>
        {nameList}
      </ContentWrap>
    </>
  );

}

export default GuestBookPage

const ContentWrap = styled.div`
  width: 80%;
  margin: 0 auto; //가운데정렬
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0 0 0 / 15%);
`;

//방명록 입력된 이름 보여주는 리스트 카드
const GuestBookListCard = styled.div`
  margin: 20px 10px; //상하20px 좌우 10px
  text-align: center; 
  padding: 5px;
  border: 3px solid #e9e9e9;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between ;
  padding: 20px;
  column-gap: 5px; //두개 사이의 간격
  & > input { //안에 들어있는 자식인데 인풋태그라면
    height: 50px;
    flex-grow: 1;
  }

  & > button {
    background-color: lightblue;
    border-style: none;
    border-radius: 20px;
  }
  & > button:hover{
  transform: scale(1.1); //크기 키워주기
  transition: 200ms;
  cursor: pointer;
  }
`;
