




import React from "react";
import './Flwr.css';
import Flowerdata from "./Flowerdata";
import { useState  } from "react";


const Flower =() =>{
    const[data,setData]=useState(Flowerdata);
    return(

        data.map((element,id)=>{
            return(
                <div className="flwrstyle">
                    <div className="card">
                        <img className="card-img-top" src={element.Image} alt="ab"></img>
                        <div className="card-body">
                        <h4 className="card-title">{element.Text}</h4>

                    </div></div>


                </div>
            )
        })
        
    )
}
export default Flower;

