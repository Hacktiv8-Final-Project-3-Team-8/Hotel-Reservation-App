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
        },
    //     editUserName: (state, action) => {
    //         console.log(action.payload);
    //         const index = state.user.findIndex((val) => val.email === action.payload.data)
    //         console.log(index);
    //         state.user[index].userName = action.payload.value
    //     },
    //     editFirstName: (state, action) => {
    //         const index = state.user.findIndex((val) => val.email === action.payload.data)
    //         state.user[index].firstName = action.payload.value
    //     },
    //     editLastName: (state, action) => {
    //         const index = state.user.findIndex((val) => val.email === action.payload.data)
    //         state.user[index].lastName = action.payload.value
    //     },
    //     editGender: (state, action) => {
    //         const index = state.user.findIndex((val) => val.email === action.payload.data)
    //         state.user[index].gender = action.payload.value
    //     },
    //     editAddres: (state, action) => {
    //         const index = state.user.findIndex((val) => val.email === action.payload.data)
    //         state.user[index].addres = action.payload.value
    //     },
    }
})

export const { addUser } = dataUserSlice.actions
export default dataUserSlice.reducer