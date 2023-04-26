import axios from "axios"

// mysql tbl_posts로부터 게시글 목록을 가져와주는 함수
export const FETCH_BOARDS = async() =>{
    return await axios.get('http://localhost:3001/boards');
}

//mysql tbl_posts로부터 게시글 한개를 가져와 주는 함수

export const FETCH_BOARD = async (postId) =>{

    return await axios.get(`http://localhost:3001/boards/${postId}`)
}

