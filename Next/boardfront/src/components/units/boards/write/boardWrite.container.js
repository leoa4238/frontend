import { useRef, useState } from "react"
import BoardWriteUI from "./boardWrite.presenter"
import axios from "axios";
import { useRouter } from "next/router";

const BoardWrite = (props) =>{
    // props.isUpdate 가 true라면 게시글 수정에서 사용중인 BoardWrite
    // props.isUpdate 가 false거나 undefined 라면 게시글 작성에서 사용중인 BoardWrite
    // console.log(props.isUpdate);
    console.log('props.post', props.post);


  console.log(props.isUpdate);
  const router = useRouter();
  //titleInput = {current:null} 
  //state 변수처럼 화면이 리렌더링되어도
  //current 속에 들어있는 값을 유지하는 변수
  //state는 속에 저장된 값이 변경되면
  //re-rendering이 되지만 ref변수는
  //current 속에 들어있는 값이 변경되어도 
  //re-rendering되지 않는다
  const titleInput = useRef(null);
  const contentInput = useRef(null);
  //contentInput={current:null};
  const [titleErrMsg, setTitleErrMsg] = useState('');
  const [contentErrMsg, setcontentErrMsg] = useState('');

  //내용과 제목이 입력 양식에 맞는지 검사해주는 함수
  //내용과 제목이 정상적으로 입력되었다면 true 아니면 false가 return 되는 함수
  const checkInput = () =>{
    //버튼 클릭시 제목이 입력되지 않았다면 
    // errmsg 보여준후에 해당 input 태그에 커서가 깜빡이도록
    // console.log('titleInput', titleInput);
    // console.log('contentInput', contentInput)
    //내용이 입력되지 않앗다면
    //errmsg 보여준 후에 해당 input태그에 커서가 깜빡이도록
    //title: 사용자가 제목 input 태그에 입력한 문자열 값이 들어있다
    const title = titleInput.current.value;
    //console.log(contentInput.current.value)
    //content: 사용자가 내용 textarea 태그에 입력한 문자열 값이 들어있다
    const content = contentInput.current.value
    
    let check = true; //flag변수 check에는 true 값이 들어있음
    
    if(!content){
      setcontentErrMsg('내용은 필수 입력값 입니다');
      contentInput.current.focus();
      check = false;
    }else{
      setcontentErrMsg('')
    }

    if(!title){ //title에 비어ㅣㅆ는 문자열이 들어있다면
      //비어있는 문자열은 false로 생각한다
      //따라서 !title --> title이 비어있을 때 true가 되어
      //if문 안에 들어옴
      setTitleErrMsg('제목은 필수 입력값 입니다');
      titleInput.current.focus();
      check = false;
    }else{
      setTitleErrMsg('')
    }

    return check;
  }


  const onPostBtnClick = () =>{
    //글쓰기 버튼 클릭시 실행되는 함수
    
    //입력된 값들을 서버쪽에 전달
    //만약에 잘 입력이 되어있다면, 
    //제목도 비어있지 않고, 내용도 비어있지 않다면
    //content !== '' && title !== ''
    //위에 있는 if영역으로 한번도 들어간 적이 없다면
    // check에 true가 들어있다면
    const title = titleInput.current.value;//글쓰기 작성시 입력한 title
    const content = contentInput.current.value; //글쓰기 작성시 입력한content
    

    //checkInput() 이 true라면 정상적으로 title과 content가 입력되었다는 소리
    if(checkInput()){
      //서버쪽에 데이터를 요청하면 된다
      axios.post('http://localhost:3001/boards', 
      {title:title, content:content, userId:1})
      .then((res)=>{
        console.log(res)
        //res.data.newId
      //res.data.data[0].insertId에 내가 새롭게 추가한 게시글 id가
      //들어있다.
      //front에서 보여지는 주소
      router.replace(`http://localhost:3000/boards/${res.data.newId}`)
      })
      .catch((err)=>console.log(err));
    }

  }

  const onUpdateBtnClick = () =>{
    const title = titleInput.current.value; //사용자가 수정한제목
    const content = contentInput.current.value;//사용자가 수정한 내용

    if(!checkInput()){
      return;
    }
    //{title, content} =={title:title, content:content}
    axios.put(`http://localhost:3001/boards/${router.query.boardId}`,{title,content} )
    .then((res)=>{
      // res.data ={mesage:10번 게시글 수정완료!, target:'10'}
      router.replace(`/boards/${res.data.target}`)
    }).catch((err)=>{console.log(err)})

  }

  return(
  <BoardWriteUI 
  onUpdateBtnClick={onUpdateBtnClick}
    post = {props.post}
    isUpdate = {props.isUpdate}
    contentErrMsg = {contentErrMsg}
     titleErrMsg = {titleErrMsg }
     onPostBtnClick={onPostBtnClick}
     titleInput = {titleInput}
     contentInput = {contentInput}
     />)
} 

export default BoardWrite;