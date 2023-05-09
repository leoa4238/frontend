import axios from "axios"

// mysql tbl_posts로부터 게시글 목록을 가져와주는 함수
export const FETCH_BOARDS = async() =>{
    return await axios.get('http://localhost:3001/boards');
}

//mysql tbl_posts로부터 게시글 한개를 가져와 주는 함수

export const FETCH_BOARD = async (postId) =>{

    return await axios.get(`http://localhost:3001/boards/${postId}`)
}

//게시글 id를 가져와서, 그 게시글에 작성된 댓글 목록 조회하는 함수
export const FETCH_COMMENTS_BY_POSTID = async (postId)=>{
    return await axios.get(`http://localhost:3001/comments?postId=${postId}`)}

//댓글 추가할 때 post 요청하는 함수
export const POST_COMMENT = async (data) =>{
    return await axios.post('http://localhost:3001/comments', data)
}

//댓글 id로 댓글 한개 조회하는 함수
export const FETCH_COMMENT = async(commentId)=>{
    return await axios.get(`http://localhost:3001/comments/${commentId}`)
}

//댓글 id로 해당 댓글 삭제하는 함수
export const DELETE_COMMENT = async (commentId) =>{
    return await axios.delete(`http://localhost:3001/comments/${commentId}`)
}