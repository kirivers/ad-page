import React from "react";
import "../css/SpellPool.css";
import SpellCell from "./SpellCell"; // Import the SpellCell component

const SpellPool = ({ abilitiesLeft, abilitiesRight, onAbilityPick }) => {
  return (
    <div className="spell-pool">
      <h2 className="spell-pool-title">Standard Abilities</h2>
      <div className="spell-pool-container">
        <SpellCell abilities={abilitiesLeft} onAbilityPick={onAbilityPick}/>
        <SpellCell abilities={abilitiesRight} onAbilityPick={onAbilityPick}/>
      </div>
    </div>
  );
};

export default SpellPool;
