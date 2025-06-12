import React from "react";

function Registerpage () 
{
    return (
        <>
            <div className="Root">
                <div className="Header">
                    <h2>Join Name To post Your Job</h2>
                </div>
                
                <div  className="form">
                <div>
                    <form>
                        <label for="first-name">First Name : </label>
                        <input type="text" id="first-name" name="first-name"></input><br></br>
                        <label for="Last-name">Last Name : </label>
                        <input type="text" id="Last-name" name="Last-name"></input><br></br>
                        <label for="Email-id">Email : </label>
                        <input type="email" id="Email-id" name="Email-id"></input><br></br>
                        <label >Password : </label>
                        <input type="password" ></input><br></br>
                        <button>Join Now</button>
                    </form>
                </div>

                <div className="buttom-header">
                    <p>Already a member ? <a href="">Sign in </a></p>
                </div>

                </div>
            </div>
        </>
    )
}

export default Registerpage;