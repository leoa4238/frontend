import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <Wrapper>
      <Title>전체검색</Title>
      <Container>
        <Input type="text" placeholder="Search..." />
        <SearchButton />
      </Container>
    </Wrapper>
  );
};

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  position: absolute;
  top: 0;
  left: 0;
  color: grey;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 561px;
  height: 132px;
  margin: 32px auto;
  padding: 8px;
  border-radius: 10px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  height: 40%;
  margin-right: 1rem;
  padding: 8px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  outline: none;

  &:focus {
    box-shadow: inset 0px 0px 0px 2px #90caf9;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    height: 40px;
    flex-grow: unset;
    width: 70%;
  }
`;

const SearchButton = styled(FiSearch)`
  font-size: 24px;
  color: #777;
  cursor: pointer;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: unset;
  }
`;

export default SearchBar;