import {configureStore} from "@reduxjs/toolkit"
import counterStore from "../counterStore"

const store = configureStore({
    reducer:{
        counter: counterStore.reducer
    }
})

export default store;