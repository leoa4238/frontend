import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
  padding: 8px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 0 2px #a7bffdbf;
`;

const SearchBox = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Search = () => {
  return (
    <SearchBox>
      <SearchBar type="text" placeholder="검색어를 입력하세요" />
    </SearchBox>
  );
};

export default Search;