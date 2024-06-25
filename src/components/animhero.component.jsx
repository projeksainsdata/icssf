import React, { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css';
import ban from "../imgs/youngs.png";
import p1 from "../imgs/pattern-1.svg";
import p2 from "../imgs/pattern-2.svg";
import p3 from "../imgs/pattern-3.svg";
import p4 from "../imgs/pattern-4.svg";

const AnimatedImageWithParticles = () => {
    useEffect(() => {
        new WOW().init();
    }, []);
  
    return (
      <div className="lg:w-1/2 ml-10">
          <div>
            <img src={ban} alt="ICSSF" className="w-3/4 h-1/2 position-relative wow animate__animated animate__fadeIn" />
            <div className="w-10 h-10 wow animate__animated animate__bounce animate__delay-2s"><img src={p1} alt="ICSSF" /></div>
            <div className="w-10 h-10 wow animate__animated animate__fadeIn"><img src={p2} alt="ICSSF" /></div>
            <div className="w-10 h-10 wow animate__animated animate__fadeIn"><img src={p3} alt="ICSSF" /></div>
            <div className="w-10 h-10 wow animate__animated animate__fadeIn"><img src={p4} alt="ICSSF" /></div>
          </div>
      </div>
    );
};
  
export default AnimatedImageWithParticles;