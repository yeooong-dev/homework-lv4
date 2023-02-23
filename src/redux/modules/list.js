import { createSlice } from '@reduxjs/toolkit'

// 초기값
export const initalState = {
    counter : 1,
    users : []
}

// 리듀서
const listSlice = createSlice({
    name : 'list',
    initialState:initalState,
    reducers : {
        addList : (state, action) => {
            return {counter:state.counter+1, users:[...state.users, {id:state.counter, ...action.payload, isDpne:false}]}
        },
        removeList : (state, action) => {
            const removeArr = [...state.users.filter((v)=>v.id!==action.payload.id)]
            return {counter:state.counter, users:removeArr};
        },
        editList : (state, action) => {
            const editArr = [...state.users.map((v)=>v.id===action.payload.id ? {...v, memo:action.payload.memo} : v)] 
            return {counter:state.counter, users:editArr};
        }
    },
});


export default listSlice.reducer;
export const { addList, removeList, editList } = listSlice.actions; 
