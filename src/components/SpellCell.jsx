import React from "react";
import "../css/SpellCell.css"; // Import the CSS file

const SpellCell = ({ abilities }) => {
  return (
    <div className="spell-grid">
      {abilities.map((ability, index) => (
        <img
          key={index}
          src={ability}
          alt={`Ability ${index + 1}`}
          className="spell-image"
        />
      ))}
    </div>
  );
};

export default SpellCell;
