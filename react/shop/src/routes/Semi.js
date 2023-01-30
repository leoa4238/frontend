import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import './Semi.module.css';


function Semi(props) {
  
  let [alert,setAlert]=useState(true);  
  let [count, setcount] = useState(0);
  let [num, setNum] = useState('');
  useEffect(()=>{ //mount, update시 실행됨
 let a = setTimeout(()=> {setAlert(false)}, 2000)
  return () =>{//useEffect 동작전에 실행되는 것 return()=>{}
    clearTimeout(a) //타이머를 제거해주는 함수
  }}, [])

  useEffect(()=>{
     if(isNaN(num)==true){
      alert("숫자만 입력가능합니다")
     }
  }, [num])
                        
   let {id} = useParams();
  //  let 찾은상품 = props.shoes.find(function(x){
  //   return x.id == id;
  //  })
  let 찾은상품 = props.shoes.find((x)=> x.id ==id);
  
   // .find() 문법을 사용하면 array자료 안에서 원하는 항목만 가져올 수 있다
  
  return (
    <div className="container">
        {alert ==true?
      <div className="alert alert-warning">
        2초이내 구매시 할인
      </div>:null
      }
      {count}
      <button onClick={()=>{setcount(count+1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Semi;