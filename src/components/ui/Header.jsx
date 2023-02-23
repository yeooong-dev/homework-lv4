import React from 'react'
import styled from 'styled-components'
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Stmain = styled.div `
  width:100%; height:1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.div `
  position:absolute;
  top:100px; 
  cursor:pointer;
 ` 

const Title = styled.div `
  position:absolute;
  top:180px; 
  text-align:center;
`

const H3 = styled.div `
  font-size:2rem;
  font-family: 'KyoboHand';
`

const H1 = styled.div `
  font-size:4rem;
  font-family: 'KyoboHand';
  `


const Home = ({item}) => {

  return (
    <Stmain>
      <Logo>
        <Link to="/">
           <AiFillHome size="50" color="#30d49e"></AiFillHome>
        </Link>
      </Logo>

       <Title>
          <H3>나의 하루</H3>
          <H1>식단표</H1>
       </Title>
    </Stmain>
  )
}

export default Home
