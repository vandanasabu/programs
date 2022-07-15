import React,{useState,useEffect} from "react";
const Inc =() =>{
    const [count,setCount]=useState(5);
   
    

    return(
        <>
        <button type="button" onClick={ ()=> setCount(count+1)}>Increment</button>
        <button type="button" onClick={() => setCount(count-1)}>Decrement</button>
        <h2>{count}</h2>
        </>
    )
}
export default Inc;