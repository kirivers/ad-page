import React from "react";
import "../css/HeroPanel.css"; // Import the CSS file

const HeroPanel = ({ heroImage, abilityImages }) => {
  return (
    <div className="hero-panel">
      {/* Hero Image */}
      <img src={heroImage} alt="Hero" className="hero-image" />

      {/* Abilities */}
      <div className="abilities-container">
        {abilityImages.map((ability, index) => (
          <img
            key={index}
            src={ability}
            alt={`Ability ${index + 1}`}
            className="ability-image"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroPanel;
