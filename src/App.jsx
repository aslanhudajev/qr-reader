import { QrScanner } from "@yudiel/react-qr-scanner";

function App() {
  return (
    <div className="App">
      <h1>Skanna QR kod</h1>
      <QrScanner
        onResult={(result) => (window.location.href = result)}
        onDecode={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
        scanDelay={2000}
      />
    </div>
  );
}

export default App;
