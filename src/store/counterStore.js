import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
    name:"counter",
    initialState:  {num:100},
    reducers:{
        up:(state,action)=>{
            state.num += action.payload
        }
    }
})

export default counterStore