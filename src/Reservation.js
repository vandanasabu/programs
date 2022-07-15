import React from "react";

const Reservation =() =>{
    const myStyle={
        backgroundImage:`URL(${process.env.PUBLIC_URL+ "bgs.jpeg"})`,
        height:'100px',
        marginTop:'70px',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        
    };
    return(
        <div style={myStyle}>
            <div className="res">
                <center>
                <h1>booking</h1>
                <form>
                    <label for="uname"> First name:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </label>
                    <input type="text" name="uname" ></input>
                    <br></br><br></br>
                    <label for="last" > last name :
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </label>
                    <input type="text" name="last"></input>
                    <br></br><br></br>
                    <button className="btn btn-success">SUBMIT</button>
                </form>
                </center>
            </div>

        </div>
    )
}
export default Reservation;