import "./Form.css";
import React from "react";
import IntroImg from "../assets/cooldrinks-homeimg.jpg";


const Form = () => {
  return (
    
    <div className="form">
        <form>
            <label>Your Name:</label>
            <input type="text"></input>

            <label>E-mail:</label>
            <input type="email"></input>

            <label>Subject:</label>
            <input type="text"></input>

            <label>Message:</label>
            <textarea rows="6" placeholder="Type Your Message here" />

            <button className="btn">Submit</button>
            
        </form>

    </div>
  )
}

export default Form
