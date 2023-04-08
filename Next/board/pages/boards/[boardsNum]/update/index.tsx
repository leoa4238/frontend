import { FETCH_BOARD } from "../../../../src/components/units/board/detail/boardDetail.queries";
import { useQuery } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";

const BoardUpdatePage = () =>{
 const router = useRouter();
  const {data} = useQuery(FETCH_BOARD, {variables:{number:Number(router.query.boardsNum)}});
   //게시글 작성 페이지라면 router.query.boardNum이 undefined 상태이다
   //따라서 data를 불러와도 data.fetchBoard에는 null 값이 들어있다
   //따라서 BoardWriteUI 부분에서 default value를 쓸때
   //data.fetchBoard?.title 이런식으로 작성해야한다(fetchBoard가 null이면 안그려줌)

 
  return(<BoardWrite data={data} isEdit={true}/>)
}

export default BoardUpdatePage; 