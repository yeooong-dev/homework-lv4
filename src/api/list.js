// axios 요청 들어가는 모든 모듈
import axios from 'axios';

// 조회
const getList = async() => {
    const response = await axios.get('http://localhost:4000');
    console.log(response);
};

export { getList }