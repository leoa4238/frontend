import { DELETE_COMMENT, DELETE_POST, FETCH_BOARD, FETCH_COMMENTS_BY_POSTID, POST_COMMENT } from "@/api/board/board.api"
import BoardDetailUI from "./BoardDetailPresenter"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";



const BoardDetail = () => {
  const router = useRouter();
  //state변수를 만들어야 한다.
  //최초에는 null이 들어있고, 데이터를 받아오는 것은 비동기 함수로 실행되기 때문에
  //데이터가 필요없는 디자인은 미리 그려두고
  //데이터를 다 받아오면 setPost()가 실행되어 post 속에 값이 변하게 되고
  //다시 렌더링이 된다
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const commentContentInputRef = useRef(null);
  //state로 변수를 만듬, null값 초기값

  console.log(router.query.boardId)
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    FETCH_BOARD(router.query.boardId)
      .then((res) => { setPost(res.data.fetch_board) })//setPost로 state변수가 변함
      .catch((err) => { console.log(err) })

    FETCH_COMMENTS_BY_POSTID(router.query.boardId)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err))
  }, [router.isReady]);



  const onMoveToUpdate = () => {
    router.push(`http://localhost:3000/boards/${router.query.boardId}/update`);
  }

  const onCommentBtnClick = () => {
    const content = commentContentInputRef.current.value;

    if (!content) {
      alert('댓글 내용은 필수적으로 입력해주세요!')
      return;
    }
    POST_COMMENT({ content: content, postId: router.query.boardId, userId: 3 })
      .then((res) => {
        console.log(res); //새롭게 추가한 댓글 객체는 res.data에 있다
        // router.reload();
        let copy = JSON.parse(JSON.stringify(comments));
        copy.push(res.data);
        setComments(copy);
        commentContentInputRef.current.value = ''
      })
      .catch(err => console.log(err))
  }
  //삭제할 댓글의 id를 받아오고, 해당 댓글을 삭제해주는 함수
  //댓글을 작성한 사람만 삭제할 수 있도록!
  const onCommentDelete = (commentId) => {
    DELETE_COMMENT(commentId)
      .then((res) => {
        let copy = JSON.parse(JSON.stringify(comments));
        copy = copy.filter((comment) => comment.id !== commentId);
        setComments(copy);
      }).catch(err => console.log(err));
  }

  const onDeleteClick = () => {
    DELETE_POST(router.query.boardId)
      .then((res) => {
        router.replace('/boards');
      })
      .catch(err => console.log(err))
  }

  return (
    <BoardDetailUI
      onDeleteClick={onDeleteClick}
      setComments={setComments}
      post={post}
      onMoveToUpdate={onMoveToUpdate}
      comments={comments}
      onCommentBtnClick={onCommentBtnClick}
      commentContentInputRef={commentContentInputRef}
      onCommentDelete={onCommentDelete}
    />
  )

}
export default BoardDetail;