import "./Footer.css";

import React from 'react';
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitch, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

            <div className="left">

                <div className="location"><FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} /><p>Pallipalayam &emsp;</p>
                    <p>   Namakkal.</p></div>
              
           

            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
            93423-53828</h4>
            </div>

            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
            ami30@gmail.com</h4>
            </div>
            </div>

            <div className="right">
                <h4>About.</h4>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                     sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                     <div className="social">
                     <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />

                     <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />

                     <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />

                     </div>
            </div>
        </div>
    </div>
  )
}

export default Footer