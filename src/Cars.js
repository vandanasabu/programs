import React from "react";
import Carousel from "react-carousel-minimal/dist/components/Carousel";

const Cars =() => {
    const data =[
        {
            image:"tulip.jpeg",
            caption:"Tulip"
        },
        {
            image:"sun.jpeg",
            caption:"sunflower"
        },
        {
            image:"lilly.jpeg",
            caption:"water lilly"
        },
        {
            image:"rose.jpeg",
            caption:"Rose"
        },
    ];
    const captionStyle={
        fontSize:'2em',
        fontWeight:'bold',
    }
    return(
        <div className="App">
            <div style={{textAlign: "center"}}>
                <div style={{
                    padding:"0 20px"
                }}>
                    <Carousel
                    data={data}
                    time={2000}
                    width="100%"
                    height="800px"
                    captionStyle={captionStyle}
                    radius="100px"
                    captionPosition="center"
                    automatic={true}
                    dots={true}
                    slideImageFit="cover"
                    style={{
                        textAlign:"top",
                        maxWidth:"100%",
                        maxHeight:"800px",
                        margin:"100px auto",
                    }}


                    ></Carousel>

                </div>
            </div>

        </div>
    )
}
export default Cars;