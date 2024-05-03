import React, { useState } from "react";

const VotingComponent = () => {
  // Step 1: Define state variables
  const [girlVotes, setGirlVotes] = useState(0);
  const [boyVotes, setBoyVotes] = useState(0);

  // Step 2: Implement vote submission
  const handleVote = (option) => {
    if (option === "girl") {
      setGirlVotes(girlVotes + 1);
    } else if (option === "boy") {
      setBoyVotes(boyVotes + 1);
    }
  };

  // Step 3: Calculate total votes
  const totalVotes = girlVotes + boyVotes;

  // Step 4: Calculate percentage results
  const girlPercentage = (girlVotes / totalVotes) * 100 || 0;
  const boyPercentage = (boyVotes / totalVotes) * 100 || 0;

  return (
    <div>
      <h2>Vote for Baby's Gender</h2>
      <div className="flex gap-1">
        <button
          className="text-[#efeae4] bg-[#bba78c] hover:bg-pink-200 hover:text-pink-500 px-2 py-1 rounded-md"
          onClick={() => handleVote("girl")}
        >
          Vote Girl
        </button>
        <button
          className="text-[#efeae4] bg-[#bba78c] hover:bg-blue-200 hover:text-blue-500 px-2 py-1 rounded-md"
          onClick={() => handleVote("boy")}
        >
          Vote Boy
        </button>
      </div>
      <div>
        <h3>Vote Count:</h3>
        <p>Girl: {girlVotes}</p>
        <p>Boy: {boyVotes}</p>
      </div>
      <div>
        <h3>Percentage Results:</h3>
        <p>Girl: {girlPercentage.toFixed(2)}%</p>
        <p>Boy: {boyPercentage.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default VotingComponent;
