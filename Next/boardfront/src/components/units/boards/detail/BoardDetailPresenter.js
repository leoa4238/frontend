import Layout from "@/components/common/layout";
import { BoardContent, BoardDetailWrap, BoardInfoWrap, BoardTitle } from "@/styles/boards/boardDetail.styles";
import { WriteBtn } from "@/styles/boards/boardList.style";
import { Comment, CommentBtn, CommentDate, CommentHeader, CommentInput, CommentInputWrap, CommentItem, CommentListWrap, CommentWriteBtn, CommentWriter } from "@/styles/comments/comments.styles";


const BoardDetailUI = (props)=>{
  return(
    <Layout>
    <BoardDetailWrap>
      <BoardTitle>{props.post?.pTitle}</BoardTitle>
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
      <WriteBtn onClick={props.onMoveToUpdate}>수정하기</WriteBtn>
      <CommentInputWrap>
        <CommentInput ref={props.commentContentInputRef}/>
        <CommentWriteBtn onClick={props.onCommentBtnClick}>댓글 달기</CommentWriteBtn>
      </CommentInputWrap>
      <CommentListWrap>
        {
          props.comments.map((comment)=>
            <CommentItem key={comment.id}>
            <CommentHeader>
              <CommentWriter>작성자 id : {comment.userId}</CommentWriter>
              <CommentDate>(작성일){comment.createdAt}</CommentDate>
              <CommentDate>(수정일){comment.updatedAt}</CommentDate>
              <CommentBtn onClick={()=>props.onCommentDelete(comment.id)}>삭제</CommentBtn>
              <CommentBtn>수정</CommentBtn>
            </CommentHeader>
            <Comment>{comment.content}</Comment>
          </CommentItem>
          )
        }
      
      </CommentListWrap>
    </BoardDetailWrap>
    </Layout>
  )

}
export default BoardDetailUI;