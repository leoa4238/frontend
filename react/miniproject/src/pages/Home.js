import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import TypingTitle from '../components/TypingTitle'



function Home() {
  const [click, setClick] = useState(false)
  const navigate = useNavigate()  
  return (
    <>
      <Header>
      <TypingTitle></TypingTitle>
      </Header>
      <Lost onClick={()=>{navigate('/profile')}}>1</Lost>
      <Lost onClick={()=>{navigate('/Boards')}}>2</Lost>
      <Lost onClick={()=>{navigate('/Home')}}>3</Lost>
      <Lost onClick={()=>{navigate('/Home')}}>3</Lost>
      <Lost>4</Lost>
    </>
  )
}

export default Home

const Header = styled.div`
  margin: 20px; 
  padding: 30px;
  border: 1px none black;
  border-radius: 20px;
  text-align: center;
  &:hover {
    background-color: #fff;
    transition: 2s;
    color: white;
    opacity: 0.7;
  }
`

const Scroll = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 5% 0;
  width: 70px;
  justify-content: flex-end;
  background-color: #444;
  border-radius: 35px;
  border:1px solid black;
  list-style: none;
  top: 0;
  box-shadow: 0 0 30px -5px rgb(0 0 0 / 15%);
  flex-direction: column;
  &:hover {
    transition: 1s;
    background-color: blue;
  }
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

const Lost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 40%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin: 100px auto;
  transition: all 0.2s linear;
  &:hover {
   background-color:#fff;
   transform: scale(1.4);
  }
  `


const Btn1 = styled.button`
border-radius: 10%;
border-style: none;
`

const ScrollContent = styled.div`
  display: flex;
`;


