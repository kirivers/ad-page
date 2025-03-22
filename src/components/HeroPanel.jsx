import React from "react";
import "../css/HeroPanel.css"; // Import the CSS file

const HeroPanel = ({ heroName, heroImage, abilityImages }) => {
  return (
    <div className="hero-panel">
      
      <h4 className="hero-name">{heroName}</h4>
      <div className="hero-panel-content">
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
    </div>
  );
};

export default HeroPanel;
