import React from "react";
import './Gallery.css';
 const Imggallery=() =>{
    return (
        <>
    <div class="gallery">
        <a target="_blank" href="lotus.jpg" >
        <img src="lotus.jpg" alt="lotus" width="60px" height="60px"></img>
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>

<div class="gallery">
<a target="_blank" href="flower.webp" >
<img src="flower.webp" alt="lotus" width="60px" height="60px"></img>
</a>
<div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
        <a target="_blank" href="rose.jpeg" >
        <img src="rose.jpeg" alt="lotus" width="60px" height="60px"></img>
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>

<div class="gallery">
<a target="_blank" href="roses.jpg" >
<img src="roses.jpg" alt="lotus" width="60px" height="60px"></img>
</a>
<div class="desc">Add a description of the image here</div>
</div>
    
</>
    )
 }

 export default Imggallery;