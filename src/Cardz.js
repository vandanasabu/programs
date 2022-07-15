import React from "react";
import './Cardsz.css';
import {Link} from "react-router-dom";
const Cardz =() =>{
    return(
        <>
        <div className="card">
        <img className="card-img-top" src="taj.jpg" alt="a"></img>
        <div className="card-body">
        <div className="card-text"><p>The Taj Mahal  is an ivory-white marble mausoleum on the right
             bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the
              Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz
               Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 
               17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in 
               formal gardens bounded on three sides by a crenellated wall.</p></div>
        </div>
        </div>
        </>
    )
}
export default Cardz;