// import React from "react";
//react 라이브러리에서 기본으로 export한 대상은 react이며, 그안에는 수많은 함수들이 들어있음
//수 많은 함수들이 들어있음(useState 포함)
//사용할 때 react.useState를 사용

//useState 함수만 import하여 쓰고 싶으면
//useState는 기본으로 export되어있지 않기에 {}로 감싸서 import
import { useState } from "react";


const CounterNum = () =>{
  const [cnt, setCnt] = useState(0);
  const[star, setStar] = useState('⭐');
  //useState() 함수는 인자로 초기값을 전달
  //함수 사용 결과는 두칸 배열, 앞자리는 상태, 뒷자리는(state를 수정하는 함수)
  //cnt는 상태(랜더링 했을 때 변화되는 부분, state)변수가 되어버렸고,
  //setCnt라는 함수인데, 변화된 상태를 반영하여 re-rendering을 요청하는 함수


  // let num = 0;

  function onCountUp(){
  setCnt(cnt=>cnt+3); //익명함수에 매개변수가 의미하는 것은 cnt가 들어있다
  setStar((star)=>{
    for(let i = 0; i<cnt; i++){
      star += '⭐'
    }
    return star;
  });

  }
  function onCountDown(){
    setCnt(cnt=>cnt-1);
  }

  function onButtonClick(){
    onCountUp()
    onCountDown()
  }
  return(
    <>
    <h1>{cnt}</h1>
    <h1>{star}</h1>
    <button onClick={onCountDown}>-</button>
    {/* 함수를 실행시켜줘야한다 onCountup()x onCountUp o */}
    <button onClick={onCountUp}>+</button>
    <button onClick={onButtonClick}>이상한 버튼</button>
    </>
  );
}

export default CounterNum;