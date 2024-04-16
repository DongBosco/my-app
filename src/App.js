<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./assets/css/tStyle.scss"
=======
import React from "react";
import "./assets/css/tStyle.scss";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {Provider, useSelector} from "react-redux";

const counterStore = createSlice({
  name: "countNum",
  initialState: {num: 100},
  reducers: {
    up: (state, action) => {
      // state.num = state.num + action.payload
      state.num += action.payload;
    },
  },
});
>>>>>>> 26e464c1e20558ade239f4cee749f6bc3f753bdd

const store = configureStore({
  reducer: {
    counter: counterStore.reducer,
  },
});
function App() {
<<<<<<< HEAD
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        const callApi = async()=>{
            try {
                const user = await axios.get("http://localhost:4000/user");
                setUserData(user.data.user)                
            } catch (error) {
                console.log(error)
            }        
        };
        callApi();
    },[])
    console.log(userData)
    return (
        <div>
            {
            userData?.map(function (item,idx){
                return <li>{item.email}</li>
            })
            }            
        </div>
    )
}

export default App
=======
  return (
    <Provider store={store}>
      <div>
        <h3>test</h3>
        <ChildOne />
      </div>
    </Provider>
  );
}

function ChildOne() {
  const num = useSelector((state) => state.counter.num);
  return <div>ChildOne{num}</div>;
}

export default App;
>>>>>>> 26e464c1e20558ade239f4cee749f6bc3f753bdd
