import { Environment } from "@react-three/drei";
import * as THREE from "three";

import Box from "../models/Box";

function Scene() {
  return (
    <>
      <ambientLight color={"white"} intensity={0.2} />
      <spotLight
        color={"white"}
        intensity={1}
        distance={7.0}
        position={[-1.2, 1, 0]}
        penumbra={0.0}
        castShadow
      />
      <Box position={[-2.5, 0, 0]} />
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 32, 32]} />
          <meshBasicMaterial color="#321e1e" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}

export default Scene;
