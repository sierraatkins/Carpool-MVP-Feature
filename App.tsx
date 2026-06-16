import { useState } from "react";
import CarpoolMatch from "./CarpoolMatch.tsx";
import { matchList } from "./sample_carpool_data";

function App() {
  // declares and initializes state variable
  const [currentIndex, setCurrentIndex] = useState(0);

  // updates index to the next match
  const nextMatch = () => {
    // updates index state
    setCurrentIndex((prev) => (prev + 1) % matchList.length);
  };

  return (
    // displays match info using matchList function
    <div className="p-4">
      <CarpoolMatch
        // uses info for the current index
        match={matchList[currentIndex]}
        // runs nextMatch when current match is approved or rejected
        onApprove={nextMatch}
        onReject={nextMatch}
      />
    </div>
  );
}

export default App;
