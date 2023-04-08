import { Button, Input, Title, Wrapper } from "./BoardWrite.styles";
import { IBoardWritePresenterProps } from "../../../../commons/types/boardType";

const BoardWriteUI = (props:IBoardWritePresenterProps)=>{
    return(
        <Wrapper>
            <Title>게시글 {props.isEdit?'수정':'작성'}하기</Title>
            <Input 
            placeholder="게시글 제목" 
            ref={(el:HTMLInputElement)=> props.inputRefs.current[0]= el} 
            defaultValue={props.data?.fetchBoard?.title}
            />
            <Input 
            placeholder="게시글 내용" 
            defaultValue={props.data?.fetchBoard?.contents}
            ref={(el:HTMLInputElement)=> props.inputRefs.current[1] = el}/>
            <Input
             placeholder="작성자" 
             defaultValue={props.data?.fetchBoard?.writer}
             ref={(el:HTMLInputElement)=> props.inputRefs.current[2] = el}/>
            <Button onClick={props.onButton1}>{props.isEdit? '수정':'작성'}</Button>
        </Wrapper>
    );
}

export default BoardWriteUI;