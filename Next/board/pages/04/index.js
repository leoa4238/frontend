import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";

const CREATE_NEW_BOARD = gql`
    mutation createBoard($writer : String, $title : String ,$contents : String) { #변수이름과 타입적는곳
        createBoard(writer: $writer, title: $title, contents: $contents){ #실제로 전달되는 변수
            _id
            number
            message
        }
    }
`;


const GQLPage = ()=>{
    const [createNewBoard] = useMutation(CREATE_NEW_BOARD);
    const router = useRouter();

    const inputRefs = useRef([]);

    const onButton1 = async ()=>{
        // 게시글 등록 
        console.log(inputRefs.current);
        const title = inputRefs.current[0].value;
        const contents = inputRefs.current[1].value;
        const writer = inputRefs.current[2].value;

        console.log(contents, title, writer);

        try{
            let res = await createNewBoard( { variables: { writer:writer, title:title, contents:contents} } );
            console.log(res);
            console.log(res.data.createBoard.message);
    
            router.push(`/05/${res.data.createBoard.number}`);

        }catch(err){
            console.log(err);
        }


    }

    return(
        <>
            <h1>GQLPage</h1>
            <input placeholder="게시글 제목" ref={(el)=> inputRefs.current[0]= el} />
            <input placeholder="게시글 내용" ref={(el)=> inputRefs.current[1] = el}/>
            <input placeholder="작성자" ref={(el)=> inputRefs.current[2] = el}/>
            <button onClick={onButton1}>버튼1</button>

        </>
    );
}

export default GQLPage;