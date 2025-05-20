import React from "react";
import "../../styles/style.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <p className="northern-roots">
        <span className="northern">
          Northern <span className="roots">Roots</span>{" "}
        </span>
      </p>
      <p className="tagline">Rooted in Support, Flourishing Together.</p>
    </div>
  );
};

export default Hero;
