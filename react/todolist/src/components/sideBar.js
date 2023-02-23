import styled from "styled-components";
import VirtualizedList from "./list";



const SideBar=()=>{
  return (
    <SideBarWrap>
      <VirtualizedList></VirtualizedList>
    </SideBarWrap>
  );
}

export default SideBar;

const SideBarWrap = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  background-color: #fff;
  right: 0;
  top: 60px;
  z-index: 1;
  `