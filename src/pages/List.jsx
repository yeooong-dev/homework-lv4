import React from 'react'
import styled from 'styled-components'
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import { removeList } from '../redux/modules/list';



const Stmain = styled.div `
  position:relative;
  width:100%; height:auto;
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

const Contents = styled.div `   
  position:relative;
  top:150px;
  width:1000px; height:auto;
  text-align:center;
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
`

const Con = styled.div`
  position:absolute;
  top:250px;
  width:500px; height:80px;
  background:#f0f0f0;
  border-radius:30px;
  padding:40px;
  line-height:20px;
  margin-bottom:50px;
`

const StName = styled.p`
  position:absolute;
  bottom:20px; left:70px;
  font-weight:bold;
  font-size:1.1rem;
`
const StTitle = styled.p`
  position:absolute;
  top:10px; left:70px;
  font-weight:bold;
  font-size:2rem;
`
const Delete = styled.button`
    position:absolute;
    bottom:60px; right:48px;
    font-size:1rem;
    font-weight:bold;
    border:none;
    cursor:pointer;
 
`

function List() {
  const navigate = useNavigate()
  const userList = useSelector((state)=>state.list)
  const dispatch = useDispatch()
  
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
            {userList.users.map(function(item){

              return(
                <Con key={item.id}>
                  <StName>작성자 : {item.name}</StName>
                  <StTitle>{item.title}</StTitle>

                  <Delete onClick={()=>dispatch(removeList(item))}><FaTrashAlt size="30" color="#30d49e"></FaTrashAlt></Delete>    
             
                  <Link style={{
                    width:"100px", height:"40px",
                    lineHeight:"40px",
                    position:"absolute",
                    top:"58px", right:"110px",
                    textDecoration:"none",
                    color: "black",
                    fontSize:"1.2rem",
                    cursor:"pointer",
                    border:"2px solid #30d49e",
                    borderRadius:"20px",
                    fontWeight:"bold",
                     }}
                        to={`/check/${item.id}`}>상세보기</Link>  
                </Con>
              )
            })}
        </Contents>
  </Stmain>
  )
}

export default List

