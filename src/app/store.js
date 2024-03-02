import {configureStore}  from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'

const store =configureStore({
    reducer:{
        allCart : cartReducer,
    }
    
})

export default store