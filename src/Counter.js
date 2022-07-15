import React,{useState,useEffect} from "react";
const Counter =() =>{
    const [count,setCount]=useState(0);
    const [calc,setCalc]=useState(0);
    useEffect ( ()=>{
        setCalc( ()=> count*2);
    },[count] );
    return(
        <>
        <p>count: {count} </p>
        <button onClick={() => setCount( (c)=>c+1 )}>+</button>
        <p>calculation : {calc}</p>
        </>
    )
}
export default Counter;