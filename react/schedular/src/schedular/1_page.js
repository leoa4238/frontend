import { useState } from 'react';
import styled from 'styled-components';
import SchedulerHeader from './2_schdulerHeader';
import SchedulerTemplate from './3_schedularTemplate';
import SchedulerCalendar from './4_schedularCalendar';
import dayjs from 'dayjs'
import SchedularContent from './5_schedularContent';


const initialData = 
    {
        '20230301':[
          {
            id:1, 
            title:'장보기', 
            detail:'저녁거리를 사러 가야함', 
            isComplete:true,
            sTime:'10:00',
            eTime:'11:00', 
          },
          {
            id:2, 
            title:'장보기', 
            detail:'저녁거리를 사러 가야함', 
            isComplete:false,
            sTime:'10:00',
            eTime:'11:00', 
          },
        ],
        '20230302':[
          {
            id:1, 
            title:'장보기', 
            detail:'저녁거리를 사러 가야함', 
            isComplete:true,
            sTime:'10:00',
            eTime:'11:00', 
          },
        ],
        '20230303':[
          {
            id:1, 
            title:'장보기', 
            detail:'저녁거리를 사러 가야함', 
            isComplete:true,
            sTime:'10:00',
            eTime:'11:00', 
          },
          '20230315'
        ],    
}

//schedule의 총 갯수 구하는 함수(매개변수로 scheduleList와 내가 보고 싶은 날짜를 받아와서)
//함수사용 결과는 schedule 갯수 return
const getScheduleCnt=(date, ScheduleList)=>{
  const key = date.format('YYYYMMDD')
  if(ScheduleList[key]===undefined){
    return 0;
  }

  return ScheduleList[key].length
}


//완료된 schedule 갯수 구하는 함수(매개변수로 scheduleList와 내가 보고 싶은 날짜를 받아와서)
//함수 사용 결과는 완료된 갯수 함수
const getCompletedCnt = (date,ScheduleList)=>{
  const key = date.format('YYYYMMDD')
  if(ScheduleList[key]===undefined){
    return 0;
  }
  return ScheduleList[key].filter((v)=>v.isComplete).length
}



const MainPage= (props)=>{
    const [date, setDate,] = useState(dayjs())
    const [ScheduleList, setScheduleList] =useState(initialData);
    
    const ScheduleCnt = getScheduleCnt(date,ScheduleList);
    const CompleteCnt = getCompletedCnt(date,ScheduleList)
    return(
        <MainWrap>
            <SchedulerHeader/>
            <SchedulerTemplate>
                <SchedulerCalendar ScheduleCnt={ScheduleCnt} date={date} setDate={setDate} />
                <SchedularContent 
                setScheduleList ={setScheduleList}
                CompleteCnt = {CompleteCnt}
                ScheduleCnt ={ScheduleCnt}
                ScheduleList={ScheduleList} 
                date={date}/>
            </SchedulerTemplate>
        </MainWrap>
    );
}

export default MainPage;

const MainWrap = styled.div`
    width: 100%;
    max-width: 1500px;

    margin: 0 auto;
`;