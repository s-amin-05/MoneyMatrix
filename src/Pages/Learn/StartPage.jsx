import React from "react";
import "./Incomebracket.css"; // Import your starting page styles

const StartPage = ({ game, onStart, onBack }) => {
  const gameDetails = {
    ruleTheBoard: {
      title: "Rule the Board",
      description:
        "Manage your finances and make strategic decisions to succeed!",
    },
    memoryGame: {
      title: "Memory Card Game",
      description: "Test your memory by matching the cards!",
    },
  };

  return (
    <div className="startpage-wrapper">
      <div className="startpage-container">
        <h1>{gameDetails[game].title}</h1>
        <p>{gameDetails[game].description}</p>

        <div className="button-container">
          <button className="button-back" onClick={onBack}>
            Back
          </button>
          <button className="button-start" onClick={onStart}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
