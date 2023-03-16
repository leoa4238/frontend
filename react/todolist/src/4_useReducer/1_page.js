import { useReducer, useState } from "react";


//인자가 2개가 있어야한다
const reducer = (state, action) =>{
  // console.log('myReducer 실행됨', a)
  // console.log(b);
  // myReducer값이 return하는 값이 state 변화로 적용된다
  console.log(action);
  if(action.type === 'increase'){
    return state + 1;
  }

  if(action.type === 'mul'){
    return state * 2;
  }
  if(action.type === 'div'){
    return state % 3;
  }
   throw new Error('예상치 못한 에러');
}


const ReducerPage = () => {
  // const [cnt, setCnt] = useState(0);

  // const onButton1 = () => {
  //   setCnt(cnt + 1)
  // }
  // const onButton2 = () => {
  //   setCnt(cnt * 2)
  // }
  // const onButton3 = () => {
  //   setCnt(cnt % 3)
  // }
  
  
  //리듀서 함수: 실질적으로 상태관리를 해주는 함수 (setState)와 같음
  //distpatch 함수: 리듀서 함수를 실행시켜주는 함수
  //인자를 두개 넘겨줘야한다.(리듀서함수, state의 초기값) 
  //--> 사용결과는 두칸짜리 배열, 0번째자리에는 state변수가, 1번째 자리에는 dispatch 함수가 들어있다

 const [cnt, dispatch] = useReducer( reducer , 0);  
  return (
    <>
      <h1>{cnt}</h1>
      <button onClick={()=>dispatch({type:'increase'})}>버튼1</button>
      <button onClick={()=>dispatch({type:'mul'})}>버튼2</button>
      <button onClick={()=>dispatch({type:'div'})}>버튼3</button>
    </>
  );
}

export default ReducerPage;
