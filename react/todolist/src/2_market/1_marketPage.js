import { red } from "@mui/material/colors";
import { useMemo, useRef, useState } from "react";

const MarketPage = ()=>{
    const [marketList, setMarketList] = useState(
        [
            {id:1, name:'바나나', cnt:3, clear:true}, 
            {id:2, name:'사과', cnt:2, clear:false}, 
            {id:3, name:'자두', cnt:5, clear:true}
        ]
    );

    // const proName = useRef(null);
    // const proCnt = useRef(null);
    const inputRef = useRef([]);

    const onComplete=(id)=>{
        let tmp =marketList.map((v)=> v.id === id ? {...v, clear:!v.clear} : v);
        setMarketList(tmp);
    }
    
    const marketListComponents = marketList.map(
        (v)=><p onClick={()=>onComplete(v.id)} key={v.id} style={{color: v.clear &&'red'}}>구매대상 : {v.name}, 갯수 : {v.cnt}</p>
    );

    
    // const getClearCnt = ()=>{
    //     console.log('구매완료 갯수 세는 함수 실행됨')
    //     return marketList.filter((v)=> v.clear).length;
    // }

    const getClearCnt = useMemo(
      ()=>{
        console.log('구매완료 갯수 세는 함수 실행!');
        return marketList.filter((v)=>v.clear).length
      }, [marketList] );

    const onAdd = ()=>{
        // console.log(proName.current.value);
        // console.log(proCnt.current.value);
        console.log(inputRef);
        console.log(inputRef[0].value);
        console.log(inputRef[1].value);

        if(!inputRef[0].value){
            inputRef[0].focus();
            return;
        }
        if(!inputRef[1].value){
            inputRef[1].focus();
            return;
        }

        let tmp = [
            ...marketList, 
            {
                id: marketList[marketList.length-1].id + 1, 
                name:inputRef[0].value ,
                cnt:inputRef[1].value, 
                clear:false
            }
        ]
        setMarketList(tmp);
    }
      const[idLength, setIdLength] = useState(0);
  
      const onIdChange = (e)=>{
        setIdLength(e.target.value.length);
      }
    return (
        <>
            <h2>마켓페이지</h2>
            <input placeholder="물품" ref={(el)=>inputRef[0] = el}/>
            <input placeholder="갯수" ref={(el)=>inputRef[1] = el}/>
            <input style={{color: idLength<8 &&'red'}} onChange={onIdChange} placeholder="주문자id를 입력하세요"/>
            <button onClick={onAdd}>추가하기!</button>
            {marketListComponents}
            <h2>전체 항목 갯수 : {marketList.length}</h2>
            <h2>구매 완료 갯수 : {getClearCnt}</h2>
        </>
    );
}

export default MarketPage;