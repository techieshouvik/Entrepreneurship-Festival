import React from "react";
import Subheading from "./Subheading";
import "../stylesheets/Section3.css";

const Section = () => {
  return (
    <div className="our_vision_container">
      <div className="texts_vision">
      <Subheading title="Our vision" colour="white" />
        <p>
          India is at the cusp of time where if we build India’s economy in the
          right way, it can become an example economy to the world. At the core
          of this tall tower of sustainability, lies businesses and startups.
        </p>
        <p>
          Our vision is to bring to light, the way of entrepreneurship and
          provide it to students as a path to unleash their innate genius!
        </p>
        <button>Visit us at Sparcrux</button>
      </div>
      <div className="vision_illustrator"></div>
    </div>
  );
};

export default Section;
