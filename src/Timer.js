import React, { useState, useEffect } from "react";
const Timer =() =>{
    const [ counted,setCount ]= useState (0);
    useEffect(() => {
    setTimeout(() => {
      setCount((counted) => counted + 1);
    }, 1000);
  }, []);
    return(
        <>
        <h1>i have rendered {counted}</h1>
        </>
    )
}
export default Timer;