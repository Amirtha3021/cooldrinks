import "./Herolmg.css";

import React from 'react';
import IntroImg from "../assets/cooldrinks-homeimg.jpg";
import { Link} from "react-router-dom";

const Herolmg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
  
    <div className="content">
        <p>Wanna Drink ?</p>
        <h1>WELCOME.</h1>
        <div>
    <Link to="/items" className="btn"> Items </Link>
    <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
    </div>
  );
};

export default Herolmg;