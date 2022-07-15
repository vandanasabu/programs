import React from "react";
import './Cards.css';
import {Link} from "react-router-dom";
const Card =() =>{
    return(
        <>
        <div className="container">
            <div className="card-deck">

            <div className="card" >
                    <img className="card-img-top" src="one.jpeg" alt="one" ></img>
                <div className="card-body">
                    <h4 className="card-title">JULIA THORN</h4>
                    <h6 className="card-title">Junior Developer</h6>
                    <p className="card-text">Lorem ipsum dolor sit emet,consectuter
                     adipising elit,essey ammet reppelet,elleqoue</p>
                </div>
                </div>
            <div className="card" >
                <img className="card-img-top" src="two.jpeg" alt="two"></img>
                <div className="card-body">
                    <h4 className="card-title">LAURA CHEDD</h4>
                    <h6 className="card-title">Full Stack Developer</h6>
                    <p className="card=text">Lorem ipsum dolor sit emet,consectuter
                     adipising elit,essey ammet reppelet,elleqoue</p>
                     </div>
            </div>
            <div className="card" >
                <img className="card-img-top" src="three.jpeg" alt="three"></img>
                <div className="card-body">
                    <h4 className="card-title">MARTHA DAVIS</h4>
                    <h6 className="card-title">UI/EX Developer</h6>
                    <p className="card-text">Lorem ipsum dolor sit emet,
                    consectuter adipising elit,essey ammet reppelet,elleqoue</p>
                </div>


                

            </div>

            </div>

        </div>
        
        </>
    )
}
export default Card;