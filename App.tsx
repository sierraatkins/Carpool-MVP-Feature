import { useState } from "react";
import CarpoolMatch from "./CarpoolMatch.tsx";
import { matchList } from "./sample_carpool_data";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMatch = () => {
    setCurrentIndex((prev) => (prev + 1) % matchList.length);
  };

  return (
    <div className="p-4">
      <CarpoolMatch
        match={matchList[currentIndex]}
        onApprove={nextMatch}
        onReject={nextMatch}
      />
    </div>
  );
}

export default App;