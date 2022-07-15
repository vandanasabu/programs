import React, { useState, useEffect } from "react";
const Count =() =>{
    const [counts,setCounts]=useState(0);
    useEffect( () => {
        setTimeout( () => {
            setCounts ( (counts) => counts + 1);
        }, 1000);
    });

    return(
        <>
        <h1>
        i have rendered {counts} times 
         </h1>
        </>

    )
}
export default Count;