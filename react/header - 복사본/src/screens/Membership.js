import React from 'react'
import companyLogo from '../img/icon.png';
import styled from 'styled-components'

function Membership() {
  return (
    <>
      <Job>JOB <div>SEARCH</div></Job>
      <Icon src={companyLogo}></Icon>
      <SecondIcon src={companyLogo}></SecondIcon>
      <div>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </div>
    </>
  )
}

export default Membership

const Job = styled.div`
font-size: 150px;
font-family: 'Pavanam';
font-style: normal;
font-weight: 400;
font-size: 150px;
line-height: 106%;
color: rgba(255, 255, 255, 0.5);
`


const Icon = styled.img`
  position: absolute;
  margin: 0;
  right: 0;
`

const SecondIcon = styled.img`
  position: absolute;
  margin: 0;
  right: 0px;
  top: 280px auto;
`