import "./Heroimg2.css";

import React from 'react';
import IntroImg from "../assets/cooldrinks-itemsImgs.jpg";
import Form from "./Form";

const Heroimg2 = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
  
  
    <Form/>
    </div>
    </div>
  )
}

export default Heroimg2