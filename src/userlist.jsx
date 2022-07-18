import React from "react";
import {userlist, increment,decrement} from "./action/index.js"
import { useSelector, useDispatch } from 'react-redux';

export default function Userlist (){
    const myState = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [list,setlist]=React.useState(myState)
    

    const handledata=()=>{
        const datalist=[{
            name:"rajan",
            age:27
        },{
            name:"krishna",
            age:20
        },{
            name:"raj",
            age:23
        }]
        dispatch(userlist(datalist))
    }
    React.useEffect(()=>{
        console.log("data store data is"+JSON.stringify(myState.uselist))
    })
    const increments=()=>{
            dispatch(increment())
    }
    const decrements=()=>{
        dispatch(decrement())
    }
    return(
        <div className="reduxpage d-flex justify-content-center align-items-center">
            <div>
            <button onClick={()=>increments()}>increment </button>
            <button><h2> {myState.incrDecre} </h2></button>
            <button onClick={()=>decrements()}>decrement</button>
           
            </div>
            
        </div>
    )
}