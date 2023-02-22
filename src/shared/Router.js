import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Record from '../pages/Record';
import List from '../pages/List';
import Check from '../pages/Check';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/record/' element={<Record />} />
                <Route path='/list' element={<List />} />
                <Route path='/check/:id' element={<Check />} />             
            </Routes>
        </BrowserRouter>
    )
}

export default Router;