import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt } from "react-icons/fa";
import { removeList } from '../redux/modules/list';



function List() {
  const userList = useSelector((state)=>state.list)
  const dispatch = useDispatch()
  
  return (
    <Stmain>
        <Contents>
            {userList.users.map(function(item){

                return(
                <Con key={item.id}>
                    <StName>작성자 : {item.name}</StName>
                    <StTitle>{item.title}</StTitle>

                    <Delete onClick={()=>dispatch(removeList(item))}><FaTrashAlt size="30" color="#30d49e"></FaTrashAlt></Delete>    
                
                    <Link style={{
                    position:"absolute",
                    top:"35px", right:"70px",
                    width:"100px", height:"40px",
                    lineHeight:"40px",
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



const Stmain = styled.div `
  position:relative;
  width:100%; height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Contents = styled.div `
  width:1000px; height:auto;
  text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Con = styled.div`
  position:relative;  
  top:-700px;
  width:460px; height:90px;
  background:#f0f0f0;
  border-radius:30px;
  padding:40px;
  line-height:20px;
  margin-bottom:50px;

  &:last-child{
    margin-bottom:-520px;
  }
`

const StName = styled.p`
  position:absolute;
  font-weight:bold;
  font-size:1.1rem; 
  left:80px; bottom:20px;
`
const StTitle = styled.p`
  position:absolute;
  font-weight:bold;
  font-size:2rem;
  top:20px; left:80px;
`
const Delete = styled.button`
  position:absolute;
  font-size:1rem;
  font-weight:bold;
  border:none;
  cursor:pointer;
  bottom:30px; right:100px;
`