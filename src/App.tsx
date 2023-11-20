import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import "./App.css";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <div className="canvas-container">
        <Suspense fallback={<Loading />}>
          <Canvas>
            <Html>
              <h1>Test</h1>
            </Html>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
