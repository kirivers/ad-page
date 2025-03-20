import React from "react";
import "../css/SpellPool.css";
import SpellCell from "./SpellCell"; // Import the SpellCell component

const SpellPool = ({ abilitiesLeft, abilitiesRight }) => {
  return (
    <div className="spell-pool">
      <h2 className="spell-pool-title">Standard Abilities</h2>
      <div className="spell-pool-container">
        <SpellCell abilities={abilitiesLeft} />
        <SpellCell abilities={abilitiesRight} />
      </div>
    </div>
  );
};

export default SpellPool;
