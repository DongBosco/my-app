import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./assets/css/tStyle.scss"

const store = configureStore({
  reducer: {
    counter: counterStore.reducer,
  },
});
function App() {
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
