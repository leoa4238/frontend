import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:340){
            writer
            title
            contents
            createdAt
        }
    }
`;

const Post1Page =()=>{
    const {data} = useQuery(FETCH_BOARD);
    console.log(data);

    return (
        <>
            1번 게시글 페이지 입니다
            <h1>제목 : {data ===undefined ? '불러오는중' : data.fetchBoard.title}</h1>
            <h2>작성자 : {data ===undefined ? '불러오는중' : data.fetchBoard.writer}</h2>
            <h2>내용 : {data ===undefined ? '불러오는중' : data.fetchBoard.contents}</h2>
            <h2>작성일 : {data ===undefined ? '불러오는중' : data.fetchBoard.createdAt}</h2>
        </>
    );
}

export default Post1Page;