import { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";

function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText);
  };

  return (
    <div className="App">
      <QrScanner
        onDecode={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
      />
    </div>
  );
}

export default App;
