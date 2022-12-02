import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    city: []
}

export const fetchCity = createAsyncThunk("user/fetchCity", async (url) => {
    const response = await axios.request(url);
    return response.data;
});

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCity.fulfilled, (state, action) => {
            return { ...state, city: action.payload }
        })
    }


})

export default citySlice.reducer
