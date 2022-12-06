import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    like: []
}
const wishSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        liking:(state,action)=>{
            state.like.push(action.payload)
            console.log(action.payload);
        },
        unliking:(state,action)=>{
            const index = state.like.findIndex((val) => val.hotel_name === action.payload)
            state.like.splice(index, 1)
            console.log('gk like');
        }

    }
})


export const { liking ,unliking} = wishSlice.actions
export default wishSlice.reducer