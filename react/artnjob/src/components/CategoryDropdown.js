import React, { useState } from 'react';

import styled from 'styled-components';

const CategoryDropdown = ({ categories, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelect(category);
    setIsOpen(false);
  };

  return (
    
    <DropdownWrapper>
      <DropdownButton onClick={handleDropdownClick}>
        {selectedCategory ? selectedCategory.name : '카테고리'}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {categories.map((category) => (
            <DropdownListItem
              key={category.id}
              onClick={() => handleCategorySelect(category)}
            >
              {category.name}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};



const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
`;

const DropdownListItem = styled.li`
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export default CategoryDropdown;