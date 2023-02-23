import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import UpdateCheck from '../components/UpdateCheck';


const Check = ({item}) => {  

    const navigate = useNavigate()

    return (
      <Stmain>
         <Header />
         <StBtn onClick={()=>navigate(-1)}>뒤로가기</StBtn> 
         <UpdateCheck />
    </Stmain>
    )
  }

export default Check



const Stmain = styled.div `
  position:relative;
  width:100%; height:1080px;
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
    z-index:3;
`