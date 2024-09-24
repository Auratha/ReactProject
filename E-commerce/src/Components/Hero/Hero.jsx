import React from "react";
import "./Hero.css";
import arrow from "../Assets/arrow.png";
import hand from "../Assets/hand_icon.png";
import heroImage from "../Assets/hero_image.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".left-hero", {
      x: 0,
      opacity: 1,
      duration: 3,
      delay: 2.5,
    });

    gsap.to(".right-hero", {
      scale: 1,
      duration: 3,
      delay: 2.5,
    });
  });

  return (
    <div className="hero">
      <div className="left-hero opacity-0 -translate-x-10">
        <p className="sub-heading">NEW ARRIVALS ONLY</p>
        <div className="new-hand">
          <p className="heading">new</p>
          <img className="hand-icon" src={hand} alt="hand" />
        </div>
        <p className="heading">collections</p>
        <p className="heading">for everyone</p>
        <div className="hero-btn cursor-pointer">
          Latest Collection
          <img className="arrow-icon" src={arrow} alt="arrow-right" />
        </div>
      </div>
      <div className="right-hero scale-0">
        <img src={heroImage} alt="heroImg" />
      </div>
    </div>
  );
};

export default Hero;
