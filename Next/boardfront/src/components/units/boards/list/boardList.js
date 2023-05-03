//사용할 보드리스트 컴포넌트

import { BoardTableRow } from "@/styles/boards/boardList.style";

 //최초에 한 번만 실행이 된다
//전체페이지 ,현재페이지
const PaginatedList = ({postsList, currentPage, onTitleClick, searchText, selectValue}) =>{
  console.log('검색어로 입력한값', searchText)
  //props.postList --> 전체 게시글
  //props.currentPage --> 현재 보고 있는 페이지
  //props.onTitleClick --> 제목을 클릭했을 때 실행시킬 함수


  //postList에서 입력된 검색어가 제목에 포함되어있는 배열로 만들기
  //filter 함수를 통해 원하는 조건을 만족하는 요소들만 뽑아서 배열 만들기
  let filteredList = postsList;
  if(searchText !== null){
    filteredList = postsList.filter((post)=>{return post.pTitle.includes(searchText)});
  }
  //filteredList에서 검색어 골라낸 배열을 다시 정렬 방식에 따라서 수정
  //selecValue : 1 --> 최신순정렬
  //selecValue : 2 --> 수정일순 정렬(수정일이 가장 최신부터)
  //selecValue : 3 --> 작성일이 오래된 순
  
  
  const PaginatedListItem = filteredList.slice((currentPage - 1) * 10, currentPage * 10)
  // PaginatedListItem에는 우리가 보고자하는 페이지에 해당하는 10개의 게시글이 들어있다 배열로
  
  
  return(
    <>
    {
      PaginatedListItem.map(
        (v, idx) => <BoardTableRow key={v.pId}>
          <p>{idx + 1 + 10*(currentPage -1)}</p>
          <p onClick={() => {onTitleClick(v.pId) }}>{v.pTitle}</p>
          <p>{v.userId}</p>
          <p>{v.createdAt.substr(0, 10)}</p>
          <p>{v.updatedAt.substr(0, 10)}</p>
        </BoardTableRow>
      )
    }
    </>
  );
}

export default PaginatedList