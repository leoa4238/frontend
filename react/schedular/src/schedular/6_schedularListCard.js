import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styled from 'styled-components'
import SchedularListCardText from './7_schedularListCardText';

const SchedularListCard = (props) => {
  const {title, detail, completed, sTime, eTime, onClick, onXClick} = props;

  return (
    <ListCardWrap onClick={onClick} completed={completed}>
      <SchedularListCardText 
      title = {title}
      detail = {detail}
      sTime = {sTime}
      eTime = {eTime}
      />
      <IconButton onClick={onXClick}>
        <DeleteOutline />
      </IconButton>
    </ListCardWrap>

  );
}

export default SchedularListCard;

const ListCardWrap = styled.div`
background-color: white;
width: 90%;
border: 3px solid lightblue;
/* margin: 0 auto; //auto는 좌우 여백을 알아서 계산해달라 */
border-radius: 10px;
padding: 10px;
display: flex;
justify-content: space-between;//늘려도 줄여도 양쪽 끝에 붙어있을 수 있도록
align-items: center;
position: relative;
cursor: pointer;
transition: 300ms;

${({ completed }) => completed && {
    color: '#e9e9e9',
    borderColor: '#e9e9e9',

    '&::after': {
      content: '"❤completed!!"',
      color: 'green',
      position: 'absolute',
      right: '5px',
      top: '0'
    }
  }
  }
  
  ${
    ({completed})=>completed ||{
      boxShadow:'2px 3px 4px rgba(0,0,0,0.1)',
      '&:hover':{
        transform:'scale(1.05)',
        backgroundColor:'lightblue'
      }
    }
  }
`;