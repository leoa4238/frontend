import { memo, useState, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase,addCount } from '../store';

// function 함수(){
//   return 반복문10억번돌린결과
// }


function Cart(){
             
  // let result = useMemo(()=>{return 함수()}, []) //dependency 안에 state가 들어갈경우에는 이때만 실행시켜주세요!
  //useSelector((state)=>{return state})가 기본임
 let state = useSelector((state)=>{return state }) //Redux store 가져와줌 
 let dispatch = useDispatch() 

  return(
    <div>
      {state.user.name}의 장바구니
      {/* {메시지에 실어서 화물로 보내는 것을 말함} */}
    <Table>
      <thead>
        {/* tr은 가로칸  */}
        <tr>
          {/* th,td를 넣으면 열(세로칸) 하나 생김 */}
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
        state.cart.map((a,i)=>
          <tr key={i}>
          <td>{state.cart[i].id}</td>
          <td>{state.cart[i].name}</td>
          <td>{state.cart[i].count}</td>
          <td>
            <button onClick={()=>{
                dispatch(addCount(state.cart[i].id))//changeName() 실행해달라고 store.js에 부탁
            }}>+</button>
            </td>
        </tr>
        )
        }
        
      </tbody>
    </Table>
    </div>
  )
}
export default Cart