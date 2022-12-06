import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    hotel: [],
    loading : false
};

export const fetchHotel = createAsyncThunk("hotel/fetchHotel", async (dest) => {
    
const options = {
    method: 'GET',
    url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/list',
    params: {
      offset: '0',
      arrival_date: dest.checkin,
      departure_date: dest.checkout,
      guest_qty: '1',
      dest_ids: dest.destination,
      room_qty: '1',
      search_type: 'city',
      children_qty: '2',
      children_age: '5,7',
      search_id: 'none',
      price_filter_currencycode: 'USD',
      order_by: 'popularity',
      languagecode: 'en-us',
      travel_purpose: 'leisure'
    },
    headers: {
      'X-RapidAPI-Key': 'e9fea85265msh7e1ff19341e6ac8p17cd32jsn4bae898ad259',
      'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
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
            console.log('did it');
            console.log(action.payload.result);
            return {...state,hotel:action.payload.result,loading:false}
        })
        .addCase(
            fetchHotel.pending,(state)=>{
                return {...state,loading:true}
            }
        )
    },
});


export default hotelSlice.reducer;