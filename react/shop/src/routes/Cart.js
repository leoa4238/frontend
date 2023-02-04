import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart(){

 let state = useSelector((state)=>{return state }) //Redux store 가져와줌
  console.log(state);
  return(
    <div>
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
          <td>{state.cart[i].name}</td>
          <td>{state.cart[i].count}</td>
          <td>안녕</td>
        </tr>
        )
        }
        
      </tbody>
    </Table>
    </div>
  )
}
export default Cart