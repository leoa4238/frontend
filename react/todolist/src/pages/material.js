import { Button } from "@mui/material";
import Header from "../components/header";

const MaterialTestPage = () =>{
  const subtitle = "material 라이브러리 사용해보기"
  const detail = "material UI 디자인을 사용해보겠습니다"
  
  return (
    <>
    <Header subtitle={subtitle} detail={detail}></Header>
    <Button variant="text">Text</Button>
    <Button variant="contained">Text</Button>
    <Button variant="outline">Text</Button>
    </>
  );
}

export default MaterialTestPage