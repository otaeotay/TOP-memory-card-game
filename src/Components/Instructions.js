import React, { useState, useEffect } from 'react';

const Instructions = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="instructions-container">
      <ul
        style={{ display: showInstructions ? 'block' : 'none' }}
        className="instructions-description"
      >
        <li>Try to memorize the order of the numbered tiles!</li>
        <li>Once memorized, click the "READY" button.</li>
        <li>Click the blank tiles in the correct order to pass the level.</li>
        <li>Click the "+" to proceed to the next difficulty!</li>
      </ul>
      <button className="instructions-header" onClick={toggleInstructions}>
        TOGGLE INSTRUCTIONS
      </button>
    </div>
  );
};

export default Instructions;
