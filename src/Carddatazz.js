import React from "react";
import Carddata from "./Carddata";
import { useState } from "react";
import './Carddatas.css';

const Carddatazz =() =>{
const[data,setData]=useState(Carddata);
return(
    
    data.map((element,id) => {
        return(
            <div className="style">
              
                <div className="card">
                    <img className="card-img-top" src={element.Image} alt="abc"></img>
                    <div className="card-body">
                        <h4 className="card-title">{element.Text}</h4>

                        <button href="#" className="btn btn danger">OK</button>
                    </div>
                </div>
                </div>

            
        )

    })
    
)
}
export default Carddatazz;