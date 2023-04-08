import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import { IBoardWriteProps } from "../../../../commons/types/boardType";
import { Mutation, MutationCreateBoardArgs, MutationUpdateBoardArgs } from "../../../../commons/types/generated/types";
import { FETCH_BOARD } from "../detail/boardDetail.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_NEW_BOARD, UPDATE_BOARDS } from "./BoardWrite.queries";


const BoardWrite = (props:IBoardWriteProps)=>{
const [createNewBoard] = useMutation<Pick<Mutation, 'createBoard'>, MutationCreateBoardArgs >(CREATE_NEW_BOARD);
const[updateBoard] = useMutation <Pick<Mutation,'updateBoard'>, MutationUpdateBoardArgs>(UPDATE_BOARDS);
const router = useRouter();
const inputRefs = useRef<HTMLInputElement[]>([]);

    const onButton1 = async ()=>{
        // 게시글 등록 

        const title = inputRefs.current[0].value;
        const contents = inputRefs.current[1].value;
        const writer = inputRefs.current[2].value;

        console.log(contents, title, writer);

        try{
            let res = await createNewBoard( { variables: { writer:writer, title:title, contents:contents} } );
            console.log(res);
            console.log(res.data?.createBoard?.message);
    
            router.push(`/boards/${res.data?.createBoard?.number}`);

        }catch(err){
            console.log(err);
        }


    }


 
    const onUpdate = async() =>{
     
     try{
        let res = await updateBoard({variables:
            {number:Number(router.query.boardsNum) ,
            title:inputRefs.current[0].value,
             contents:inputRefs.current[1].value,
              writer:inputRefs.current[2].value,
            }
        })
        console.log(res);
        alert(res.data?.updateBoard?.message);

        router.push(`/boards/${res.data?.updateBoard?.number}`);
    }catch(err){
        console.log(err);
    }

    }

    return(
        <BoardWriteUI
        inputRefs = {inputRefs}
        onButton1 = {props.isEdit? onUpdate : onButton1}
        isEdit = {props.isEdit}
        data = {props.data}
        />
    );

}


export default BoardWrite;