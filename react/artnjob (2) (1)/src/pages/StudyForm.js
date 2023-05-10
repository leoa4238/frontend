
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Checkbox from '@mui/joy/Checkbox';
import Input from '@mui/joy/Input';
import { LineStudy, StudyContentsWrap, StudyFormFont, StudyFormRadio, StudyFormWrapper, StudyRegisterWrap, StudyTextForm, StudyTextFormWrap, StudyTitleTextWrap } from "../styles/StudyFormStyle";
import { RegisterButton } from '../styles/formSrtyle';


const StudyForm = () => {

  return (
    <div>
      <StudyFormWrapper>
      <StudyTextFormWrap>
        <StudyFormFont>스터디 글쓰기</StudyFormFont>
        <StudyContentsWrap>
          <div>카테고리</div>
          <Select defaultValue="Music" style={{ width: "538px" }}>
            <Option value="Music">음악</Option>
            <Option value="design">디자인</Option>
            <Option value="Art">미술</Option>
          </Select>
        </StudyContentsWrap>
        <StudyContentsWrap>
          <div>지역</div>
          <Select defaultValue="Seoul" style={{ width: "538px" }}>
            <Option value="Seoul">서울</Option>
            <Option value="Kyunggi">경기</Option>
            <Option value="Incheon">인천</Option>
            <Option value="busan">부산</Option>
            <Option value="Daegu">대구</Option>
            <Option value="Daejeon">대전</Option>
            <Option value="Gwangju">광주</Option>
          </Select>
        </StudyContentsWrap>
        <StudyContentsWrap>
          <div>모집인원</div>
          <StudyFormRadio>
            <Input placeholder="명" variant="outlined" style={{ width: "538px" }} />
            <Checkbox label="제한없음" variant="outlined" defaultChecked />
          </StudyFormRadio>
        </StudyContentsWrap>
        <LineStudy></LineStudy>
        <StudyTitleTextWrap>
          <div>스터디 모집 제목</div>
          <Input variant="outlined" style={{ width: "538px" }} />
        </StudyTitleTextWrap>
        <div>
          <StudyTextForm
            placeholder="내용을 입력해 주세요. (시간, 장소 등등 필요한 정보 입력)"
            minRows={2}
          />
        </div>
        <StudyRegisterWrap>
        <RegisterButton>등록</RegisterButton>
        <RegisterButton>미리보기</RegisterButton>
        </StudyRegisterWrap>
        </StudyTextFormWrap>
      </StudyFormWrapper>
    </div>
  )

}

export default StudyForm;