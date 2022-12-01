import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from '../redux/hotel.js'
import userreduc from '../redux/user.js'
import dataReducer from '../redux/user_redux.js'

export const store = configureStore({
    reducer : {
        hotel : hotelReducer,
        user : userreduc,
        data : dataReducer
    }
})