import React from 'react'
import Container from '../components/Navbar/Styles/Container/Container.style'
import { Header, MainHeader } from '../components/Navbar/Styles/Container/Header/Header.styled'


const Home = () => {
  return (
    <Container>
      <Header>
         <MainHeader>
          <h2>Developer Service</h2>
         </MainHeader>
      </Header>
    </Container>
  )
}

export default Home