import { Suspense } from "react";
import "./App.css";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <div className="canvas-container">
        <Suspense fallback={<Loading />}>
          <h1>Test</h1>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
