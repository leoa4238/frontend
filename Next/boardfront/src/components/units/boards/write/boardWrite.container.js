import BoardWriteUI from "./boardWrite.presenter"

const BoardWrite = () =>{
  const onPostBtnClick = () =>{
    //버튼 클릭시 제목이 입력되지 않았다면 
    // errmsg 보여준후에 해당 input 태그에 커서가 깜빡이도록

    //내용이 입력되지 않앗다면
    //errmsg 보여준 후에 해당 input태그에 커서가 깜빡이도록
  }
  return(<BoardWriteUI onPostBtnClick={onPostBtnClick}/>)
} 

export default BoardWrite;