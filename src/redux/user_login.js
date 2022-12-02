import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    login : ''
}
const loginSlice = createSlice({
    name:'user_login',
    initialState,
    reducers:{
        userLogin : (state,action)=>{
            state.login = action.payload
        },
        userLogout : (state)=>{
            state.login = ''
        },
    }
})


export const {userLogin,userLogout} =loginSlice.actions
export default loginSlice.reducer