import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="Search..." />
      <SearchButton/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 561px;
  height: 132px;
  margin: 32px auto;
  padding: 8px;
  border-radius: 10px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 768px) {
    margin: 32px 0;
  }
`;


const Input = styled.input`
  flex-grow: 1;
  height: 50%;
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  outline: none;

  &:focus {
    box-shadow: inset 0px 0px 0px 2px #90caf9;
  }
`;

const SearchButton = styled(FiSearch)`
 font-size: 24px;
  color: #777;
  cursor: pointer;
`;
export default SearchBar;