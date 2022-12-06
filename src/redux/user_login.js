import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    login: '',
    like: [],
    history: []
}
const loginSlice = createSlice({
    name: 'user_login',
    initialState,
    reducers: {
        editUser:(state,action)=>{
            state.login = action.payload
        },
        userLogin: (state, action) => {
            state.login = action.payload
        },
        userLogout: (state) => {
            state.login = ''
        },
        userLike: (state, action) => {

            state.like.push(action.payload)
            console.log(action.payload);
        },
        userUnlike: (state, action) => {
            const index = state.like.findIndex((val) => val === action.payload)
            state.like.splice(index, 1)
            console.log('gk like');
        },
        userHistory: (state, action) => {
            state.history.push(action.payload)
        }

    }
})


export const { userLogin, userLogout, userLike, userUnlike, userHistory, editUser } = loginSlice.actions
export default loginSlice.reducer