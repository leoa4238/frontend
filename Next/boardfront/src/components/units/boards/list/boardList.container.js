import { useEffect, useRef, useState } from "react";
import BoardListUI from "./boardList.presenter";
import axios from "axios";
import { FETCH_BOARDS } from "../../../../api/board/board.api";
import { useRouter } from "next/router";
import { BoardTableRow } from "@/styles/boards/boardList.style";





const BoardList = () => {
  const router = useRouter();
  const [postsList, setPostList] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState(null);
  const [selectValue, setSelectValue] = useState(1);
  //mysql tbl_posts로 부터 작성된 게시글 가져오기
  //렌더링 될때마다 혹은 특정 상황에서 실행시키고자하는 
  //함수를 실행해주는 hook 함수
  //만일 의존성 배열이 비어있다면 최초 렌더링 될떄 1회만 실행이 된다
  useEffect(() => {
    //데이터를 받아오기

    FETCH_BOARDS().then((a) => {
      //a.data.data는 배열인데 이를 작성일자 내림차순으로 정렬한 후
      //postList에 대입
      //a.data.data 속에 들어있는 값의 순서를 원하느 ㄴ모양으로 바꿔주고, 이를
      let copyData = JSON.parse(JSON.stringify(a.data.data))
      //db로 부터 받아온 복사본을 배열을 정렬(최신순 정렬)
      copyData.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) })
      //전체페이지는 한 페이지당 10개씩 게시물 갯수 / 10을 올림한 값
      setTotalPage(Math.ceil(copyData.length / 10))
      setPostList(copyData)
    })
      .catch((err) => { console.log(err) })
  }, [])

  const onTitleClick = (postId) => {
    //해당 게시글로 이동하기
    router.push(`/boards/${postId}`);

  };

  const onWriteBtnClick = () => {
    router.push('boards/new');
  }

  const onPageClick = (event, value) => {
    setCurrentPage(value);
  }

  const onSearchClick = () =>{
    //입력된 값이 필요하고
    setSearchText(searchInput.current.value)

  }

  const onEnterDown = (event) =>{
    console.log('키보드 클릭됨!!', event)
    if(event.key== 'Enter'){
      onSearchClick();
    }
  }

  const onSelectChange = (event) =>{
    setSelectValue(event.target.value);
  }


  return (
    <BoardListUI
      onSelectChange={onSelectChange}
      selectValue = {selectValue}
      onEnterDown ={onEnterDown}
      searchInput={searchInput}
      postsList={postsList}
      onTitleClick={onTitleClick}
      onWriteBtnClick={onWriteBtnClick}
      totalPage={totalPage}
      currentPage={currentPage}
      onPageClick={onPageClick}
      searchText ={searchText}
      onSearchClick={onSearchClick}
    />
  );
}

export default BoardList