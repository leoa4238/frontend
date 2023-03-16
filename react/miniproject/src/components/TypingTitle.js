import styled from 'styled-components';
import { useState, useEffect } from 'react';

const TypingTitle = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = 'Developer 안성현 포트폴리오 입니다';


  useEffect(() => {
    
    if (count === completionWord.length) {
      clearInterval(setInterval);
    }
  }, [count, completionWord.length]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 300);

    return () => clearInterval(setInterval);
  }, [500]);

  useEffect(() => {
    if (count >= 0 && count < completionWord.length) {
      setBlogTitle((prevTitleValue) => prevTitleValue + completionWord[count]);
    }
  }, [count, completionWord]);

  return <MainTitle className="main-title">{blogTitle}</MainTitle>;
};

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
`;

export default TypingTitle;