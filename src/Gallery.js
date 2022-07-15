import React from "react";
import './Gallerys.css';
import {Carousel} from "react-carousel-minimal/dist/components/Carousel";
const Gallery =() =>{
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
    <div className="carousel-inner">
        <div className="carousel -item active">
            <img className="d-block w-100" src="colosseum.jpg" alt="a" ></img>
             </div>
             <div className="carousel -item active">
            <img className="d-block w-100" src="eiffel.jpeg" alt="a" ></img>
             </div>
             <div className="carousel -item active">
            <img className="d-block w-100" src="taj.jpg" alt="a" ></img>
             </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        </>
    )
}
export default Gallery;