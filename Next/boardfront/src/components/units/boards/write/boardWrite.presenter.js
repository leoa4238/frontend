import Layout from "@/components/common/layout";
import { BoardMain, BoardWriteContentInput, BoardWriteInput, BoardWriteInputFlexContainer, BoardWriteInputLabel, BoardWriteInputWrap, BoardWriteTitle, BoardWriteWrap, ErrMsg, PostBtn, RequiredMark } from "@/styles/boards/boardWrite.styles";

const BoardWriteUI = (props) => {
  //props.isUpdate가 true라면 게시글 수정에서 사용중인 형태
  //아니면 게시글 작성해서 사용중인 형태
  console.log('제목',props.post?.pTitle)
  console.log('내용',props.post?.pContent)
  return (
    <Layout>
      <BoardMain>
        <BoardWriteWrap>
          <BoardWriteTitle>게시물 {props.isUpdate ? '수정':'등록'}</BoardWriteTitle>
          <BoardWriteInputFlexContainer>
            <BoardWriteInputWrap>
              <BoardWriteInputLabel>
                제목<RequiredMark>*</RequiredMark>
              </BoardWriteInputLabel>
              <BoardWriteInput defaultValue={props.post?.pTitle} ref={props.titleInput} placeholder="제목을 입력하세요" />
              <ErrMsg>{props.titleErrMsg}</ErrMsg>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap>
              <BoardWriteInputLabel>내용<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
              <BoardWriteContentInput defaultValue={props.post?.pContent} ref={props.contentInput} placeholder="내용을 입력하세요" />
              <ErrMsg>{props.contentErrMsg}</ErrMsg>
            </BoardWriteInputWrap>
          </BoardWriteInputFlexContainer>
          <PostBtn onClick={props.isUpdate? props.onUpdateBtnClick: props.onPostBtnClick}>{props.isUpdate ? '수정':'등록'}하기</PostBtn>
        </BoardWriteWrap>
      </BoardMain>
    </Layout>
  )
}

export default BoardWriteUI;