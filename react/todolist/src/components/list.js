import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import {paths} from '../assets/constant'
import { useNavigate } from 'react-router-dom';

function renderRow(props) {
  console.log('renderRow() 함수 실행됨')
  const { index, style } = props;

  

  const onListItemClick = () =>{
    window.location.href = paths[index].path
  }

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={onListItemClick}>
        <ListItemText primary={<p>{paths[index].title}</p>} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: 600, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={600}
        width={360}
        itemSize={46}
        itemCount={4}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}