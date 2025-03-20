import React from "react";
import "../css/DraftPanel.css";
import UltPool from "./UltPool";
import SpellPool from "./SpellPool";
import TeamPanel from "./TeamPanel";

const DraftPanel = ({ radiantHeroes, direHeroes, ultimateAbilities, abilitiesLeft, abilitiesRight }) => {
  return (
    <div className="draft-panel">
      
      {/* Radiant Team Panel */}
      <TeamPanel team="Radiant" heroes={radiantHeroes} />

      {/* Center Pools */}
      <div className="center-pool">
        <UltPool ultimateAbilities={ultimateAbilities} />
        <SpellPool abilitiesLeft={abilitiesLeft} abilitiesRight={abilitiesRight} />
      </div>

      {/* Dire Team Panel */}
      <TeamPanel team="Dire" heroes={direHeroes} />
    </div>
  );
};

export default DraftPanel;
