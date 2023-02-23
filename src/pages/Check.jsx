import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillHome } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editList } from '../redux/modules/list';
import { MdCreate } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";


const Stmain = styled.div `
  position:relative;
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
    z-index:3;
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
  width:1000px; height:500px;
  text-align:center;
`
const Con = styled.div`
  position:relative;
  top:100px;
  width:800px; height:600px;
  overflow-y: scroll;
  background:#f0f0f0;
  border-radius:30px;
  padding:40px;
  display:inline-block;
  line-height:20px;
  margin-bottom:100px;
`

const StName = styled.p`
  display:block;
  position:absolute;
  top:210px; left:100px;
  font-size:1.4rem;
  font-weight:bold;
`
const StTitle = styled.p`
  position:absolute;
  top:120px; left:100px;
  font-weight:bold;
  font-size:3rem;
  color:#30d49e;
`
const Stmemo = styled.p`
  width:80%; height:100%;
  position:absolute;
  top:60px; left:100px;
  font-size:1.4rem;
  line-height:1.5;
  word-break:break-all;
`

const StDate = styled.p`
  position:absolute;
  top:50px; left:90px;
  font-weight:bold;
  font-size:1.5rem;
  width:170px; height:40px;
  line-height:40px;
  border:2px solid #30d49e;
  color:#30d49e;
  border-radius:30px;
  box-shadow: 11px 12px 5px -10px rgba(0,0,0,0.19);
  -webkit-box-shadow: 11px 12px 5px -10px rgba(0,0,0,0.19);
  -moz-box-shadow: 11px 12px 5px -10px rgba(0,0,0,0.19);
`

const EditBtn = styled.p`
  position:absolute;
  top:20px; right:-30px;
  cursor:pointer;
  white-space:normal;
`
const MemoBox = styled.div`
  width:70%; height:180px;
  border-radius:30px;
  padding-left:160px;
  padding-bottom:40px;
  position:relative;
  &::-webkit-scrollbar {
    display: none;
  }
`

const MemoInput = styled.input`
  position:absolute;
  top:20px; right:-60px;
  width:100%; height:100%;
  border-radius:30px;
  border:none;
  padding:20px;
  font-size:1.4rem;
  word-break:break-all;
  box-shadow: 11px 12px 3px -5px rgba(0,0,0,0.17);
  -webkit-box-shadow: 11px 12px 3px -5px rgba(0,0,0,0.17);
  -moz-box-shadow: 11px 12px 3px -5px rgba(0,0,0,0.17);
`



function Check({item}) {  

    const data = useSelector(state=>state.list)
    const params = useParams()
    const foundData = data.users.find((item)=>{
        return item.id === Number(params.id);
      })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [edit, setEdit] =useState(false);

    const [editContents,setEditContents] = useState(foundData.memo);

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
                    <p style={{ width:"700px" , marginTop:"290px", borderTop:"1px solid black" , marginLeft:"50px" , opacity:"20%" }}></p>
                    <MemoBox>
                        { edit===false ? <Stmemo>{foundData.memo}</Stmemo> : <MemoInput type="text" value={editContents} onChange={(e)=>{setEditContents(e.target.value)}} />}
                
                        { edit===false ?  <EditBtn onClick={()=>{setEdit(!edit)}}><MdCreate size="40" /></EditBtn> : <EditBtn onClick={()=>{setEdit(!edit); dispatch(editList({id:Number(params.id),memo:editContents}))}}><MdDoneAll size="45" color="#30d49e" /></EditBtn>}
                    </MemoBox>
                  
                  </Con>
          </Contents>
    </Stmain>
    )
  }

export default Check
