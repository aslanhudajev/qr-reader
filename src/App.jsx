import { useState } from "react";

import Html5QrcodePlugin from "./components/Html5QR";

function App() {
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText);
  };

  return (
    <>
      <div className="App">
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div>
    </>
  );
}

export default App;
