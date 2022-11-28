import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from '../redux/hotel.js'
import userreduc from '../redux/user.js'

export const store = configureStore({
    reducer : {
        hotel : hotelReducer,
        user : userreduc
    }
})