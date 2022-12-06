import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    city: [],
    loading:false
}

export const fetchCity = createAsyncThunk("user/fetchCity", async (url) => {
    const response = await axios.request(url);
    return response.data;
});

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        reset:(state,action)=>{
            state.city = []
            console.log(action.payload);
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchCity.fulfilled, (state, action) => {
            return { ...state, city: action.payload,loading:false }
        })
        .addCase(fetchCity.pending,(state)=>{
            return {...state,loading:true}
        })
    }


})


export const {reset} = citySlice.actions
export default citySlice.reducer
