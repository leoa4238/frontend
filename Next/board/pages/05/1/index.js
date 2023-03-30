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
`


const Post1Page = () => {
  const {data} = useQuery(FETCH_BOARD ); //data는 이미 정해진 이름이므로 무조건 써야함
  
  return(
    <>
      1번 게시글 페이지 입니다
      <h1>제목 :{data == undefined ? '불러오는중' :data.fetchBoard.title}</h1>
      <h1>작성자 :{data == undefined ? '불러오는중' : data.fetchBoard.wirter}</h1>
      <h1>내용 :{data == undefined ? '불러오는중' : data.fetchBoard.contents}</h1>
      <h1>작성일 :{data == undefined ? '불러오는중' : data.fetchBoard.createdAt}</h1>
    </>
  )

}

export default Post1Page;