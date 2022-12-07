import { createSlice } from "@reduxjs/toolkit";

export const savedHotelSlice = createSlice({
  name: "savedHotel",
  initialState: [],
  reducers: {
    addHotel: (state, action) => {
      return[action.payload, ...state];
    },
    deleteHotel: (state, action) => {
      return state.filter((e) => e.url !== action.payload);
    },
  },
});

export const { addHotel, deleteHotel } = savedHotelSlice.actions;
export default savedHotelSlice.reducer;
