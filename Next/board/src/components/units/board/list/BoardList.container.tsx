import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Query, QueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

const BoardList = ()=>{
    const {data} = useQuery<Pick<Query,'fetchBoards'>,QueryFetchBoardArgs>(FETCH_BOARDS);
    const router = useRouter();

    const onButtonClick = (number:number)=>{
        router.push(`/boards/${number}`);
    }

    const onNewBoard = () =>{
        router.push('/boards/new')
    }

    return( 
        <BoardListUI 
            onButtonClick={onButtonClick}
            onNewBoard ={onNewBoard}
            data ={data!}
        />
    );
}

export default BoardList;