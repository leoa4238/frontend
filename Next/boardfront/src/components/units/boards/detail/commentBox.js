import { FETCH_COMMENTS_BY_POSTID, UPDATE_COMMENT } from '@/api/board/board.api';
import { Comment, CommentBtn, CommentDate, CommentHeader, CommentItem, CommentWriter } from '@/styles/comments/comments.styles'
import React, { useRef, useState } from 'react'

const CommentBox = ({comment, onCommentDelete,setComments,postId}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const commentInputRef = useRef(null);

  const onUpdateComplete = () =>{
//isUpdate가 true인 상태에서 클릭이 되면 
//input내에 존재하는 입력된 값을 데이터베이스에 전달하기
    UPDATE_COMMENT(comment.id, commentInputRef.current.value)
    .then(res =>{
      console.log(res)
      //1.성공시에 다시 해당 게시글 전체 목록 요청, 그 목록을 coments로 바꾼다
      FETCH_COMMENTS_BY_POSTID(postId).then(res=>{
        setComments(res.data)
        setIsUpdate(false)
      }).catch(err=>console.log(err))
      //2. 원래 있던 comments(최초렌더링 시에 받아온 댓글 목록)에서 수정된 부분만 변경하여 comments를 바꾼다
     

    })
    .catch(err => console.log(err))
}

  const onUpdateClick = () =>{
    
    setIsUpdate(true)
  }

  return (
    <CommentItem>
    <CommentHeader>
      <CommentWriter>작성자 id : {comment.userId}</CommentWriter>
      <CommentDate>(작성일){comment.createdAt}</CommentDate>
      <CommentDate>(수정일){comment.updatedAt}</CommentDate>
      <CommentBtn onClick={() => onCommentDelete(comment.id)}>삭제</CommentBtn>
      <CommentBtn onClick={isUpdate? onUpdateComplete : onUpdateClick}>{isUpdate ? "완료": "수정"}</CommentBtn>
    </CommentHeader>
    {isUpdate ? <input ref={commentInputRef} defaultValue={comment.content}/>:<Comment>{comment.content}</Comment>} 
  </CommentItem>
  )
}

export default CommentBox