import React from "react";
const Carousel =() =>{
    return(
        <>
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-sliede-to="0" className="active"></li>
                <li data-target="#demo" data-sslide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            

        </div>
        </>
    )
}