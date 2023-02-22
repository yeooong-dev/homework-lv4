import React from 'react'
import styled from 'styled-components'
import { AiFillHome } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Stmain = styled.div `
  width:100%; height:1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.div `
  position:fixed;
  top:100px; 
  cursor:pointer;
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
`

const Title = styled.div `
  position:fixed;
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

const Contents = styled.div `
  width:1000px; height:500px;
  margin-top:200px;
  text-align:center;
`
const Con = styled.div`
  position:relative;
  top:30px;
  width:500px; height:80px;
  background:#f0f0f0;
  border-radius:30px;
  padding:40px;
  display:inline-block;
  line-height:20px;
  margin-bottom:50px;
`

const StName = styled.p`
  position:absolute;
  bottom:10px; left:40px;
  font-weight:bold;
  font-size:1.1rem;
`
const StTitle = styled.p`
  position:absolute;
  top:20px; left:40px;
  font-weight:bold;
  font-size:2rem;
`
const Stmemo = styled.p`

`

const StDate = styled.p`

`

function Check() {
    const data = useSelector(state=>state.list)
    const params = useParams()
    const foundData = data.users.find((item)=>{
        return item.id === Number(params.id);
      })

    const navigate = useNavigate()


    return (
      <Stmain>
          <Logo>
             <Link to="/">
                <AiFillHome size="50" color="#30d49e"></AiFillHome>
            </Link>
          </Logo>
  
          <StBtn onClick={()=>navigate(-1)}>뒤로가기</StBtn>
  
          <Title>
              <H3>나의 하루</H3>
              <H1>식단표</H1>
          </Title>
          
          <Contents>
                  <Con>
                    <StName>작성자 :  {foundData.name}</StName>
                    <StDate>{foundData.date}</StDate>
                    <StTitle>{foundData.title}</StTitle>
                    <Stmemo>{foundData.memo}</Stmemo>
                    <button>수정하기</button>
                  </Con>
          </Contents>
    </Stmain>
    )
  }

export default Check
