import styled from "styled-components";
import SchedularListCard from "./6_schedularListCard";


//논리 처리(날짜와 스케쥴리스트를 받아서 해당 날짜의 스케줄들이 들어있는 ListCard를 return해주는 함수)
const getListCards = (date, ScheduleList,f) => {
  let key = date.format('YYYYMMDD');

  //만약 '20230301'번째 방이 스케줄이 없다면 undefined
  //만약 '20230301'번째 방이 스케줄이 모두 삭제되었다면 비어있는 배열

  if(ScheduleList[key] === undefined || ScheduleList[key].length===0){
    return <p>일정을 추가해 주세요</p>
  }

  return ScheduleList[key].map(
    (v) => <SchedularListCard
      key={v.id}
      completed={v.isComplete}
      title={v.title}
      detail={v.detail}
      sTime={v.sTime}
      eTime={v.eTime}
      onClick={()=>{f(v.id)}}
    />//중복되지 않는걸 넣어줘야한다
  )
}

const SchedularContent = (props) => {
  const { date, ScheduleList, ScheduleCnt, CompleteCnt, setScheduleList } = props

  const onCompleteClick = (id) =>{
    const key = date.format('YYYYMMDD')
   const tmp = JSON.stringfy(ScheduleList)
   const copy = JSON.parse(tmp); //완전히 똑같은데 완전히 새로운 객체가 된다

  const updatedSchedule = copy[key].map((v)=>
      v.id === id ? {...v, isComplete: !v.isComplete} : v
   );

   copy[key] = updatedSchedule;

   setScheduleList(copy);
  }
  
  const listCards = getListCards(date, ScheduleList, onCompleteClick);
  return (
    <SchedularContentWrap>
      <SchedularHeader>
        <h2>{date.format('YYYY년 MM월 DD일')}스케줄</h2>
        <p>총 {ScheduleCnt}개중 {CompleteCnt}개 완료</p>
        <button>+</button>
      </SchedularHeader>
      {listCards}
    </SchedularContentWrap>
  )
}

export default SchedularContent;

const SchedularContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  padding: 0px 20px;
  row-gap: 20px;

  &::-webkit-scrollbar{
    display: none;
  }

  align-items: center;
`;
const SchedularHeader = styled.div`
border-bottom: 3px solid #e9e9e9;

position: sticky; // relative
z-index: 1;
background-color: white;

padding: 20px 0 10px;

& button{
    position: absolute;
    right: 10px;
    bottom: 10px;
}

width: 100%;
top: 0;
`;