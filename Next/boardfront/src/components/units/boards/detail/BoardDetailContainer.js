import { FETCH_BOARD } from "@/api/board/board.api"
import BoardDetailUI from "./BoardDetailPresenter"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";



const BoardDetail = () =>{
  const router = useRouter();
  //state변수를 만들어야 한다.
  //최초에는 null이 들어있고, 데이터를 받아오는 것은 비동기 함수로 실행되기 때문에
  //데이터가 필요없는 디자인은 미리 그려두고
  //데이터를 다 받아오면 setPost()가 실행되어 post 속에 값이 변하게 되고
  //다시 렌더링이 된다
  const [post,setPost] = useState(null);
  //state로 변수를 만듬, null값 초기값

  console.log(router.query.boardId)
  useEffect(()=>{
    FETCH_BOARD(router.query.boardId)
    .then((res)=>{setPost(res.data.fetch_board)})//setPost로 state변수가 변함
    .catch((err)=>{console.log(err)})  
  },[])
  return(
  <BoardDetailUI post = {post}/>
  )

}
export default BoardDetail