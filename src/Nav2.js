import React from "react";
import {Link} from "react-router-dom";
import './Nav2.css'; 
const Nav2=() =>{
    return (
        <>
        <div className="topnav">
            <li><Link to ='/'>Homee</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/abouts'>Abouts</Link></li>
        </div>
        </>
    )
}
export default Nav2;