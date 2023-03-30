import { ApolloClient, gql, useMutation } from "@apollo/client"
import { useRef } from "react";


const CREATE_NEW_BOARD = gql`
mutation createBoard($writer: String, $title:String, $contents:String){ #변수이름과 타입을적는곳
  createBoard(writer: $writer, title: $title, contents: $contents){ #실제로 전달되는 변수
    _id
    number
    message
  }
}
`;


const GQLPage = () =>{
const [createNewBoard] = useMutation(CREATE_NEW_BOARD);

const inputRefs = useRef([]);

const onbutton1 = async() =>{
  // 게시글 등록
const title = inputRefs.current[0].value;
const contents = inputRefs.current[1].value;
const writer = inputRefs.current[2].value;

console.log(title, contents, writer);

 let res = await createNewBoard( {variables : {writer: writer, title:title, contents:contents} } ); //인자를 넘겨줄때 객체로 넘겨줘야한다 키값을 variables로 넘겨줘야한다 
 console.log(res)
 console.log(res.data.createBoard.message);

 console.log(inputRefs.current);
}

return(
  <>
  <h1>GQLPage</h1>
  <input placeholder="게시글 제목" ref={(el)=> inputRefs.current[0]= el} />
  <input placeholder="게시글 내용" ref={(el)=> inputRefs.current[1] = el}/>
  <input placeholder="작성자" ref={(el)=> inputRefs.current[2] = el}/>
  <button onClick={onbutton1}>버튼1</button>
  </>
)

}

export default GQLPage