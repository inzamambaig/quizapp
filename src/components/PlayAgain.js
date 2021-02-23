import React from "react";

const PlayAgain = ({ score, newGame }) => {
  return (
    <div>
      <div>Your score {score} out of 5</div>
      <button onClick={newGame}>Play Again</button>
    </div>
  );
};

export default PlayAgain;
