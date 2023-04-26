import { useEffect,useState } from "react";
import BoardListUI from "./boardList.presenter";
import axios from "axios";
import { FETCH_BOARDS } from "../../../../api/board/board.api";
import { useRouter } from "next/router";

const BoardList = () =>{
  const router = useRouter();
  const [postsList, setPostList] = useState([]);
  //mysql tbl_posts로 부터 작성된 게시글 가져오기
  //렌더링 될때마다 혹은 특정 상황에서 실행시키고자하는 
  //함수를 실행해주는 hook 함수
  //만일 의존성 배열이 비어있다면 최초 렌더링 될떄 1회만 실행이 된다
  useEffect(()=>{
    //데이터를 받아오기
 
    FETCH_BOARDS().then((a)=>{setPostList(a.data.data)})
    .catch((err)=>{console.log(err)})
},[])

  const onTitleClick = (postId) =>{
    //해당 게시글로 이동하기
    router.push(`/boards/${postId}`);

  };

  const onWriteBtnClick = () =>{
    router.push('boards/new');
  }

  return(
    <BoardListUI 
    postsList = {postsList} 
    onTitleClick={onTitleClick} 
    onWriteBtnClick={onWriteBtnClick}/>
  );
}

export default BoardList