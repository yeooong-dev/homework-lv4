import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import MenuList from "../components/MenuList";
import Header from '../components/ui/Header';


function List() {
  const navigate = useNavigate()
  
  return (
    <Stmain>
      <Header />
      <StBtn onClick={()=>navigate(-1)}>뒤로가기</StBtn>
      <MenuList /> 
  </Stmain>
  )
}

export default List;



const Stmain = styled.div `
  position:relative;
  width:100%; height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StBtn = styled.button`
    position:absolute;
    top:180px; right:32%;
    width:90px; height:50px;
    background-color:#30d49e;
    border-radius:50px;
    font-size:1rem;
    font-weight:bold;
    border:none;
    color:white;
    cursor:pointer;
    z-index:2;
`

