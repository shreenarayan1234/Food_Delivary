// Redux Toolkit is a library to help manage Redux state more easily in React apps.
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"

export const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})