import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    hotel: [],
};

export const fetchHotel = createAsyncThunk("hotel/fetchHotel", async (url) => {
    const options = {
        method: 'GET',
        url: 'https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json',
        headers: {
          'X-RapidAPI-Key': '4715070c97mshcc70c31b807ad68p1cc469jsnf4fe07622580',
          'X-RapidAPI-Host': 'hotels-com-free.p.rapidapi.com'
        }
      };
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
});

const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchHotel.fulfilled, (state, action) => {
            if (state.hotel.length === 0) {
                console.log(action.payload);
                return { ...state, hotel: action.payload };
            } else {
                console.log("hotel udah ada");
            }
        });
    },
});


export default hotelSlice.reducer;