import Layout from "@/components/common/layout";
import { BoardHeader, BoardListWrap, BoardSearch, BoardTableHeader, BoardTableRow, Line, SearchBtn, SearchWrap, WriteBtn } from "@/styles/boards/boardList.style";

const BoardListUI = (props) =>{
  return(
    <Layout>
    <BoardListWrap>
      <h1>게시글 목록</h1>
      <Line/>
      <BoardHeader>
        <p>게시글</p>
        <SearchWrap>
          <BoardSearch/>
          <SearchBtn>검색</SearchBtn>
        </SearchWrap>
      </BoardHeader>
      <BoardTableHeader>
        <p>NO</p>
        <p>제목</p>
        <p>작성자id</p>
        <p>작성일자</p>
        <p>수정일자</p>
      </BoardTableHeader>
      
        {
        props.postsList.map(
          (v,idx)=> <BoardTableRow key={v.pId}>
            <p>{idx+1}</p>
            <p onClick={()=> {props.onTitleClick(v.pId)}}>{v.pTitle}</p>
            <p>{v.userId}</p>
            <p>{v.createdAt.substr(0,10)}</p>
            <p>{v.updatedAt.substr(0,10)}</p>
          </BoardTableRow>
          )
          }
      <WriteBtn onClick={props.onWriteBtnClick}>글쓰기</WriteBtn>
    </BoardListWrap>
    </Layout>
  )

}

export default BoardListUI;