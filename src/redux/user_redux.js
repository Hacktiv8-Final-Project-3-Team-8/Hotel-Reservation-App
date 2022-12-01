import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: []
}

const dataUserSlice = createSlice({
    name: 'data_user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload)
            console.log('did it');
        }
    }
}) 

export const {addUser} = dataUserSlice.actions
export default dataUserSlice.reducer