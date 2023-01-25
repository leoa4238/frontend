
import logo from './logo.svg';
import './App.css'; //경로
import React, { useState } from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(2);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Reactblog</h4> 
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy = copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목]; // 화살표를 가리키기 때문에 [...]을 넣어줘야한다 => 화살표를 새로 바꿔주세요 괄호를 씌워주세요
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글 수정</button>

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick ={ ()=>{따봉변경(따봉+1)} }>👍</span>
        {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>


     
      <div className='list'>
        <h4 onClick={()=>{
          setModal(!modal);
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function (a, i) {
          return (
            <div className='list'>
              <h4 onClick={() => {
                setModal(!modal);
                setTitle(i)
              }}>{글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉]
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍</span>
                {따봉[i]}</h4>
              <p>2월 17일 발행</p>
             <button onClick={()=>{
              let copy = [...글제목]; //글제목만 빼버리면 자료를 알아서 삭제해준다
              copy.splice(i,1); //원하는 자료를 삭제
              글제목변경(copy);
             }}>삭제</button>
            </div>)
        })
      }
      <input onChange={(e)=>{
        입력값변경(e.target.value)
        }}></input>
      <button onClick={(e) => {
         let copy = [...글제목]; //copy본을 만들어 저장한다  array나 state를 변경하고 싶으면 하는게 좋다
         copy.unshift(입력값); //copy 맨처음에 유저가 입력한 글을 추가하는 것 => unshift함수
         글제목변경(copy);
         }}>
        글발행
      </button>


      {/* 과제 1.버튼 누르면 글 하나 추가되는 기능 만들기 
          힌트1. html 직접 하나 만들 필요없음
          힌트2. array에 자료 추가하는 법은? 구글에 검색해보시길

          과제2. 글마다 삭제 버튼& 기능 만들기
          state를 조작하면 됩니다

      */}

      {/* <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button> */}
      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null
      }
    </div>
  );
}


function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>  
      <button onClick={() => props.글제목변경(['여자 코트 추천', '강남우동 맛집', '파이썬 독학'])}>글수정</button>
    </div>
  )
}


// class Modal2 extends React.Component{ //변수 함수 보관함이다
//   constructor(){
//     super()
//     this.state = {
//       name : 'ahn',
//       age : 20
//     }
//   }  
//   render(){
//     return(
//       <div>안녕 {this.state.age}
//       <button onClick={()=>{
//         this.setState({age: 21})
//       }}>버튼</button>
//       </div>
//     )
//   }
// }

export default App;
