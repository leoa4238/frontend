import styled from "styled-components";
import moreIcon from "../assets/images/more.png";
import cancelIcon from "../assets/images/close.png";

export const HeaderWrap = styled.header`
  height: 90px;                                 
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const CompanyLogo = styled.img`
  height: 47px;
  margin-left: 29px;
  cursor:pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 53px;
  column-gap: 40px;

  transition: 1s;
  transition-property: transform;
  
  background-color: white;

  @media screen and (max-width:768px){
    z-index: -1;
    flex-direction: column;
    row-gap: 20px;
    position: absolute;

    bottom:  0;
    left: 0;
    right: 0;
    margin-right: 0;

    padding: 20px;

    ${({isMenuOpen})=> isMenuOpen && {
        'transform' : 'translateY(100%)'
      }
    }
  }
`;

export const NavLi = styled.div`
  font-weight: ${({current})=> current && "bold"};
  font-size: 13px;
  cursor: pointer;

  @media screen and (min-width:768px){
    ${
      ({join})=>join && {
        backgroundColor:'#ffc742',
        padding: '5px 25px',
        borderRadius:'5px',
      }
    }
  }

`;

export const HamburgerMenu = styled.div`
  background-image: ${ ({isMenuOpen})=>isMenuOpen ? `url(${cancelIcon})` : `url(${moreIcon})`};
  background-size:contain;
  height: 25px;
  width: 25px;
  margin-right: 10px;

  @media screen and (min-width:768px){
   display:none;
  }

`;



