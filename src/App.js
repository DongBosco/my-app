import React from 'react'
import "./assets/css/tStyle.scss"
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import ChildOne from './store/childOne' 
import store from './store'


function App() {
  return (
    <div>
        <Provider store={store}>
            <h3>title: toolkit</h3>
            <ChildOne />
        </Provider>
    </div>
  )
}

export default App