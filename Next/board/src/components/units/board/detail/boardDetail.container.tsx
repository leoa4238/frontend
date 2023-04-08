import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import { Query, QueryFetchBoardArgs } from '../../../../commons/types/generated/types'
import BoardDetailUI from './boardDetail.present'
import { FETCH_BOARD } from './boardDetail.queries'

const BoardDetail =() =>{
  const router = useRouter()
console.log(router.query.boardsNum);
  const {data} = useQuery<Pick<Query,"fetchBoard">, QueryFetchBoardArgs>(FETCH_BOARD,
    {variables:{number:Number(router.query.boardsNum)}
  });

  const onUpdateClick=()=>{
    router.push(`/boards/${router.query.boardsNum}/update`)
  }


  return (
    <BoardDetailUI data={data!} onUpdateClick={onUpdateClick}/>
  ) //!를 쓰는 이유는 undefined나 null값이 절대 올수 없다는 의미이다
}

export default BoardDetail