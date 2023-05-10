import Layout from "@/components/common/layout";
import { BoardContent, BoardDetailBtnWrap, BoardDetailWrap, BoardInfoWrap, BoardTitle } from "@/styles/boards/boardDetail.styles";
import { WriteBtn } from "@/styles/boards/boardList.style";
import { Comment, CommentBtn, CommentDate, CommentHeader, CommentInput, CommentInputWrap, CommentItem, CommentListWrap, CommentWriteBtn, CommentWriter } from "@/styles/comments/comments.styles";
import CommentBox from "./commentBox";


const BoardDetailUI = (props) => {
  return (
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
        <BoardDetailBtnWrap>
        <WriteBtn onClick={props.onMoveToUpdate}>수정하기</WriteBtn>
        <WriteBtn onClick={props.onDeleteClick} style={{backgroundColor:'red', color:'white'}}>삭제하기</WriteBtn>
        </BoardDetailBtnWrap>
        <CommentInputWrap>
          <CommentInput ref={props.commentContentInputRef} />
          <CommentWriteBtn onClick={props.onCommentBtnClick}>댓글 달기</CommentWriteBtn>
        </CommentInputWrap>
        <CommentListWrap>
          {
            props.comments.map((comment) =>
            <CommentBox 
            postId ={props.post?.pId}
            key={comment.id}
            comment={comment}
            onCommentDelete={props.onCommentDelete}
            setComments={props.setComments}
            />
            )
          }

        </CommentListWrap>
      </BoardDetailWrap>
    </Layout>
  )

}
export default BoardDetailUI;