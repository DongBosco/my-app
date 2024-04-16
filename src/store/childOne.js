import {useSelector, useDispatch} from "react-redux"
import counterStore from "./counterStore";
import React from "react";

function ChildOne(){
    const num = useSelector((state)=>{
        return state.counter.num;
    })
    const dispatch = useDispatch()
    return 
        <div>
            <h1> test /{num} </h1>
            <button onClick={()=>{dispatch(counterStore.action.up(1))}}></button>
        </div>
    }

export default ChildOne;