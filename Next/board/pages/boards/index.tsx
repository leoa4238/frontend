import { useRouter } from "next/router";
import BoardList from "../../src/components/units/board/list/BoardList.container";

const BoardListPage = ()=>{
    const router = useRouter();
    
    //router.query.boardNum --> 내가 보고자하는 게시글 번호가 쓰여있다

    return(
    <BoardList/>
    );
}

export default BoardListPage;

