import React from "react";
import './Navgallery.css';
const Menu =() =>{
    return (
        <>
        <div className="gallery">
            <a target="-blank" href="beagle.jpg">
                <img src="beagle.jpg" alt="beagle" width="=800px" height="800px"></img>
            </a>
            <div className="desc"><h3>Beagle</h3>
            <p>Small, compact, and hardy, Beagles are active companions for kids and adults alike.
                 Canines of this dog breed are merry and fun loving, but being hounds, they can also be 
                 stubborn and require patient, creative training techniques</p>
            </div>
        </div>
        <div className="gallery">
            <a target="-blank" href="moggy.jpg">
                <img src="moggy.jpeg" alt="beagle" width="800px" height="800px"></img>
            </a>
            <div className="desc"><h3>Moggy</h3>
            <p>Moggy cats, mixed breed cats, domestic shorthairs and longhairs:
                 Whatever you want to call them, one could make the case for their non-pedigreed 
                 background. “Hybrid vigor,” or a combination of the best genetic material arising from 
                 a diverse gene pool, often leads to a lower risk for inherited diseases and common medical 
                 conditions found in purebred animals</p></div>
            </div>
            <div className="gallery">
            <a target="-blank" href="munchik.jpg">
                <img src="munchik.jpg" alt="beagle" width="800px" height="800px"></img>
            </a>
            <div className="desc"><h3>Munchik</h3>
            <p>The Munchkin cat or Sausage cat is a relatively new breed of cat characterized by its very
                 short legs, which are caused by genetic mutation. The Munchkin is considered to be the original
                  breed of dwarf cat.Much controversy erupted over the breed when it was recognized by The 
                  International Cat Association (TICA) in 1997 with critics voicing concern over potential health 
                  and mobility issues.[1] Many pedigree cat associations around the world have refused to recognize 
                  the Munchkin cat due to the 
                  welfare of the breed and severity of the health issues,[2] including the 
                  Governing Council of the Cat Fancy (GCCF)</p></div>
            </div>
            <div className="gallery">
            <a target="-blank" href="pearsian.jpg">
                <img src="pearsian.jpeg" alt="beagle" width="800px" height="800px"></img>
            </a>
            <div className="desc"><h3>Pearsian</h3>
            <p>The Persian has a sweet, gentle nature and is quiet and easy to live with. They
                 are happy to be combed and petted by children, but are unlikely to join in boisterous games 
                 with them.</p>
            </div>
            </div>
            <div className="gallery">
            <a target="-blank" href="poodle.jpg">
                <img src="poodle.jpeg" alt="beagle" width="800px" height="800px"></img>
            </a>
            <div className="desc"><h3>Poodle</h3>
            <p>The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog.
                 The breed is divided into four varieties based on size, the Standard Poodle, Medium
                  Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle variety is not
                   universally recognised</p></div>
            </div>
            <div className="gallery">
            <a target="-blank" href="poodle.jpg">
                <img src="sphynx.jpg" alt="beagle" width="800px" height="800px"></img>
            </a>
            <div className="desc"><h3>Sphynx</h3>
            <p>Notable for its hairless coat, the sphynx is also a friendly, loving, and energetic 
                show-off who craves human attention. In contrast to her regal looks and serious 
                expression, the sphynx is an acrobatic clown who doesn't take herself too seriously.
                 She loves to entertain and delight her humans and will follow you around the house like
                  a puppy. If you're thinking about adopting a sphynx cat, read on for everything you 
                  need to know.</p></div>
            </div>
            
        </>
    )
}
export default Menu;