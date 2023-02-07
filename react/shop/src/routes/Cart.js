import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from '../store';

function Cart(){
              //useSelector((state)=>{return state})가 기본임
 let state = useSelector((state)=>{return state }) //Redux store 가져와줌 
 let dispatch = useDispatch() 

  
  return(
    <div>
      {state.user.name}{state.user.age}의 장바구니
    <button onClick={()=>{dispatch(increase(100))}}>버튼</button>
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
          <td>1</td>

          <td>{state.cart[i].id}</td>
          <td>{state.cart[i].name}</td>
          <td>{state.cart[i].count}</td>
          <td>안녕</td>
          <td>
            <button onClick={()=>{
                dispatch(changeName())//changeName() 실행해달라고 store.js에 부탁
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