import React from "react";
import './Travels.css'; 
import { Link,useNavigate} from "react-router-dom";
const Travel =() =>{
    const navigate = useNavigate();
    const navButt =()=>{
        navigate("/Book")
    }
    return(
    <>
        <div className="container-fluid">
            <div className="navbar navbar-expand-sm fixed-top">

            

                <a className="navbar-brand" href="#demo">
                    <img src="log.png" alt="abc" height="80px" width="80px"></img>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/'class="nav-link" href="#demo">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/About'class="nav-link" href="#demo">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Tour'class="nav-link" href="#demo">TOUR SEARCH</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Offer'class="nav-link" href="#demo">OFFERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Gallery'class="nav-link" href="#demo">GALLERY</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Service'class="nav-link" href="#demo">SERVICES</Link>
                    </li>
                   <button type="button" onClick={navButt} className="btn btn-info">BOOK MY TOUR</button>
                </ul>
            </div>


        </div>
        
        </>

    )
}
export default Travel;