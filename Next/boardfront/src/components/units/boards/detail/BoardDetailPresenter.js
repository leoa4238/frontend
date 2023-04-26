import Layout from "@/components/common/layout";
import { BoardContent, BoardDetailWrap, BoardInfoWrap, BoardTitle } from "@/styles/boards/boardDetail.styles";
import { WriteBtn } from "@/styles/boards/boardList.style";


const BoardDetailUI = (props)=>{
  return(
    <Layout>
    <BoardDetailWrap>
      <BoardTitle>게시글의 제목입니다</BoardTitle>
      <BoardInfoWrap>
        <p>작성자id</p>
        <p>{props.post?.userId}</p>
        <p>게시글 id</p>
        <p>{props.post?.pId}</p>
      </BoardInfoWrap>
      <BoardInfoWrap>
        <p>작성일자</p>
        <p>{props.post?.createdAt}</p>
        <p>수정일자</p>
        <p>{props.post?.updatedAt}</p>
      </BoardInfoWrap>
      <BoardContent>
      {props.post?.pContent}
      </BoardContent>
      <WriteBtn>수정하기</WriteBtn>
    </BoardDetailWrap>
    </Layout>
  )

}
export default BoardDetailUI;