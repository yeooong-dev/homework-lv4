import React from 'react';
import styled from 'styled-components'
import Header from '../components/ui/Header';
import AddRecord from '../components/AddRecord';
import { useNavigate } from 'react-router-dom';




const Record = () => {

  const navigate = useNavigate()

  return (
      <Stmain>
        <Header />
        <StBtn onClick={()=>navigate(-1)}>뒤로가기</StBtn>
        <AddRecord />
      </Stmain>
  )
}

export default Record;



const Stmain = styled.div `
  position:relative;
  width:100%; height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

//뒤로가기
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
`