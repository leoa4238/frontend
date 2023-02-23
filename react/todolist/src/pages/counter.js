import Header from "../components/header";
import CounterNum from "../components/counterNum";
// 부모 컴포넌트이다 header를 부모컴포넌트에서 쓰고 있기 때문이다
const Counter = () =>{
  return(
     <>
     <Header 
     subtitle='카운터 컴포넌트 입니다' 
     detail = 'state에 대해서 알아보는 시간을 갖겠습니다'
     />
     <CounterNum/>
    </>
  )
}

export default Counter;