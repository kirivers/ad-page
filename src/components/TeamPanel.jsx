import React from "react";
import "../css/TeamPanel.css";
import HeroPanel from "./HeroPanel";

const TeamPanel = ({ team, heroes }) => {
  return (
    <div className="team-panel">
      <h3 className="team">{team}</h3>
      <div className="hero-panels">
        {heroes.map((hero, index) => (
          <HeroPanel
            key={index}
            heroName = {hero.name}
            heroImage={hero.image}
            abilityImages={hero.selectedAbilities}
            
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPanel;
