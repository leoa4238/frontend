import styled from 'styled-components';
const SchedulerHeader = ()=>{
    return(
        <SchedulerHeaderWrap>
            ASH Scheduler
        </SchedulerHeaderWrap>
    );
}

export default SchedulerHeader;

const SchedulerHeaderWrap = styled.div`
    font-size:20px;
    padding-left: 40px;
    height: 60px;
    line-height: 60px;
    font-weight: bold;
`;