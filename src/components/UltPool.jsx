import React from "react";
import "../css/UltPool.css"; // Import the CSS file

const UltPool = ({ ultimateAbilities }) => {
  return (
    <div className="ult-pool">
      <h2 className="ult-pool-title">Ultimate Abilities</h2>
      <div className="ult-grid">
        {ultimateAbilities.map((ability, index) => (
          <img
            key={index}
            src={ability}
            alt={`Ultimate Ability ${index + 1}`}
            className="ult-image"
          />
        ))}
      </div>
    </div>
  );
};

export default UltPool;
