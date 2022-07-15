import React from "react";
import './Navs.css';
import { Link } from "react-router-dom";
const Nav=() => {
    return (
        <>
        <div className="topnav">
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            
        </ul>
        </div>
        </>
    )
}
export default Nav;