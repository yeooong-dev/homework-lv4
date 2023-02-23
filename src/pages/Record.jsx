import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../redux/modules/list';
 

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
  width:1000px; height:auto;
  text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Box1 = styled.div `
  width:800px;
  background:#f0f0f0;
  border-radius:30px;
  padding:50px;
  display:inline-block;
  margin-top:350px; margin-bottom:150px;
`

const InputBox = styled.input`
    width:580px; height:60px;
    border-radius:20px;
    border:none;
    margin-bottom:20px;
    padding-top:5px;
    padding-left:2.5rem;
    padding-right:2.5rem;
    font-size:1rem;
    font-family: 'S-CoreDream-3Light';
`
const InputBox3 = styled.textarea`
    width:580px; height:140px;
    border-radius:20px;
    border:none;
    margin-bottom:50px;
    padding-top:50px;
    line-height:2;
    padding-left:2.5rem;
    padding-right:2.5rem;
    font-size:1em;
    font-family: 'S-CoreDream-3Light';
`

const P = styled.p`
   font-size:1.3rem;
   font-weight:bold;
   margin-bottom:-2px;
`

const Btn = styled.button`
    width:160px; height:60px;
    border-radius:50px;
    border:none;
    margin: 20px;
    font-size:1.2rem;
    background: #30d49e;
    color: white;
    font-weight:bold;
    cursor:pointer; 
    box-shadow: -2px 8px 11px -2px rgba(48,212,158,0.37);
    -webkit-box-shadow: -2px 8px 11px -2px rgba(48,212,158,0.37);
    -moz-box-shadow: -2px 8px 11px -2px rgba(48,212,158,0.37);

    &:hover{  
      border: 4px solid #a6dac2;
      transition:.3s;
      background:none;
      color:black;
    }
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


function Record() {

    const dispatch = useDispatch()
    const data = useSelector(state=>state.list)
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [memo, setMemo] = useState('');

    const nameAddHandler = (e) => {
        setName(e.target.value);
    }

    const dateAddHandler = (e) => {
      setDate(e.target.value);
  }

    const titleAddHandler = (e) => {
        setTitle(e.target.value);
    }

    const memoAddHandler = (e) => {
        setMemo(e.target.value);
    }

    const clickAddButtonHandler = () => {
        if(name===""||date===""||title===""||memo==="")return
        dispatch(addList({name,date,title,memo}))
        setName("");
        setDate("");
        setTitle("");
        setMemo("");
        navigate("/list");
    }

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
            <Box1>
                <P>작성자</P> <br />
                <InputBox value={name} onChange={nameAddHandler} maxLength='5' type="text" placeholder="작성자의 이름을 입력해 주세요. (5자 이내)"/>

                <P>날짜 선택</P> <br />
                <InputBox value={date} onChange={dateAddHandler} type="date" placeholder="날짜를 선택해 주새요."/>

                <P>음식</P> <br />
                <InputBox value={title} onChange={titleAddHandler} maxLength='50' type="text" placeholder="음식을 입력해 주세요. (50자 이내)"/>

                <P>내용</P> <br />
                <InputBox3 value={memo} onChange={memoAddHandler} maxLength='100' type="text" placeholder=" 내용을 입력해 주세요. (100자 이내) &#13;&#10; ex) 아침에 국밥 한그릇" />

                <br />
                <Btn onClick={clickAddButtonHandler}>추가하기</Btn>
            </Box1>
        </Contents>
  </Stmain>
  )
}

export default Record
