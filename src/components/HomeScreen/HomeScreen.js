import React from "react";
import "../../styles/style.css";

import Navbar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import CTAButton from "../CTAButton/CTAButton";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="div">
        <Navbar />
        <Hero />
        <CTAButton label="Sign Up" className="overlap-group" />
        <CTAButton label="Find More" className="overlap" />
      </div>
    </div>
  );
};

export default HomeScreen;
