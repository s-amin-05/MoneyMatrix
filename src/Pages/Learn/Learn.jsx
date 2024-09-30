import { useState } from "react";
import GamesPage from "./GamesPage";
import StartPage from "./StartPage";
import IncomeBracketPage from "./IncomeBracketPage";
import BudgetSim from "./BudgetSim";
import MemoryGame from "./MemoryGame";
function Learn() {
  const [currentPage, setCurrentPage] = useState("games"); // Track which page to show
  const [selectedGame, setSelectedGame] = useState(null); // Track which game is selected

  // Navigate to the game description page
  const handleSelectGame = (game) => {
    setSelectedGame(game); // Store which game was selected
    setCurrentPage("description"); // Navigate to description page
  };

  // Start the selected game based on game type
  const handleStartGame = () => {
    if (selectedGame === "ruleTheBoard") {
      // First, show the Income Bracket page if Rule the Board is selected
      setCurrentPage("incomeBracket");
    } else if (selectedGame === "memoryGame") {
      // Directly start Memory Game if it's selected
      setCurrentPage("memoryGame");
    }
  };

  // Move to the actual Rule the Board game from the Income Bracket Page
  const handleStartIncomeBracketGame = () => {
    if (selectedGame === "ruleTheBoard") {
      setCurrentPage("ruleTheBoard");
    }
  };

  // Go back to game selection page
  const handleBack = () => {
    setCurrentPage("games"); // Navigate back to games page
  };

  // Go back to the description page from IncomeBracketPage
  const handleBackFromIncomeBracket = () => {
    setCurrentPage("description"); // Navigate back to game description
  };

  return (
    <div>
      {/* Show the GamesPage if currentPage is 'games' */}
      {currentPage === "games" && <GamesPage onSelectGame={handleSelectGame} />}

      {/* Show the game description page (StartPage) */}
      {currentPage === "description" && (
        <StartPage
          game={selectedGame}
          onStart={handleStartGame} // Now handles the game start process based on the selected game
          onBack={handleBack}
        />
      )}

      {/* Show the Income Bracket page for Rule the Board only */}
      {currentPage === "incomeBracket" && (
        <IncomeBracketPage
          onStartGame={handleStartIncomeBracketGame} // Moves to the actual game
          onBack={handleBackFromIncomeBracket} // Back to the description page
        />
      )}

      {/* Show Rule the Board game */}
      {currentPage === "ruleTheBoard" && (
        <BudgetSim onQuit={handleBack} /> // Added Quit Button logic here
      )}

      {/* Show Memory Game */}
      {currentPage === "memoryGame" && <MemoryGame />}
    </div>
  );
}

export default Learn;
