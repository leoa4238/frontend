import { Textarea } from "@mui/joy";
import styled from "styled-components";

export const StudyFormWholeWrap = styled.div`
  width: 100%;
  background: #F6F6F6;
`;

export const StudyFormWrapper = styled.div`
  width: 100%;
  max-width: 1062px;
  margin: 0 auto;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  font-family: 'Inter';
  font-style: normal;
`;

export const StudyFormFont = styled.h2`
  font-size: 30px;
  font-weight: 600;
  font-family: 'Inter';
  margin-bottom: 48px;
`;

export const StudyFormRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StudyContentsWrap = styled.div`
  margin-bottom: 24px;
`;

export const StudyTitleTextWrap = styled.div`
  margin-bottom: 16px;
`;

export const LineStudy = styled.div`
  border: 3px solid #E9E9E9;
  width: 100%;
  max-width: 982px;
  margin: 75px auto;
`;

export const StudyTextForm= styled(Textarea)({
  width: "100%",
  height: "639px",
  borderRadius: "4px",
  marginBottom:"51px"
});

export const StudyTextFormWrap= styled.div`
  margin-left: 48px;
  padding-top: 48px;
  width: 100%;
  max-width: 982px;
  margin: 0 auto;
`;

export const StudyRegisterWrap = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  max-width: 1062px;
  margin-top: 40px;
`;
