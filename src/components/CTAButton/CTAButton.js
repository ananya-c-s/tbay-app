import React from "react";
import "../../styles/style.css";
import "./CTAButton.css";

const CTAButton = ({ label, className }) => {
  return (
    <div className={className}>
      <div>{label}</div>
    </div>
  );
};

export default CTAButton;
