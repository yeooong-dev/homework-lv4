import React from 'react'
import styled from 'styled-components'
import Header from "../components/ui/Header";
import HomeContents from "../components/HomeContents";



const Home = ({item}) => {

  return (
    <Stmain>
      <Header />
      <HomeContents />
    </Stmain>
  )
}

export default Home;



const Stmain = styled.div `
  width:100%; height:1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`