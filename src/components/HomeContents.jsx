import React from 'react'
import styled from 'styled-components'
import { AiFillRightSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Home = ({item}) => {

  return (
    <Stmain>
         <Contents>
         <Link to="/record">
          <Box1>
             <p style={{ fontSize:"1.8rem" ,
                         marginTop:"130px",
                         fontFamily:"S-CoreDream-3Light",
                         fontWeight:"bold",
                         color:"black",
                    }}>
                      먹은 음식 기록하기</p>
              <AiFillRightSquare size="65" color="#30d49e" />
            </Box1>
          </Link>
     

       
          <Link to="/list">
            <Box2>
              <p style={{ fontSize:"1.8rem" ,
                          marginTop:"130px",
                          fontFamily:"S-CoreDream-3Light",
                          fontWeight:"bold",
                          color:"black",
                          }}>
                            확인하러 가기</p>
              <AiFillRightSquare size="65" color="#30d49e"/>
            </Box2>
          </Link>
      </Contents>
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


const Contents = styled.div `
  width:1000px; height:500px;
  margin-top:-300px;
  text-align:center;
`

const Box1 = styled.div `
  width:300px; height:400px;
  background:#f0f0f0;
  border-radius:30px;
  padding:40px;
  display:inline-block;
  margin-right:50px;
  box-shadow: 10px 10px 3px -2px rgba(38,38,38,0.18);
  -webkit-box-shadow: 10px 10px 3px -2px rgba(38,38,38,0.18);
  -moz-box-shadow: 10px 10px 3px -2px rgba(38,38,38,0.18);

  &:hover{  
    border: 4px solid #a6dac2;
    transition:.3s;
  }
`
const Box2 = styled.div `
  width:300px; height:400px;
  background:#f0f0f0;
  border-radius:30px;
  padding:40px;
  display:inline-block;
  box-shadow: 10px 10px 3px -2px rgba(38,38,38,0.18);
  -webkit-box-shadow: 10px 10px 3px -2px rgba(38,38,38,0.18);
  -moz-box-shadow: 10px 10px 3px -2px rgba(38,38,38,0.18);

  &:hover{  
    border: 5px solid #a6dac2;
    transition:.3s;
  }
`