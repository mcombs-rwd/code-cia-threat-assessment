import { Environment } from "@react-three/drei";
import * as THREE from "three";

import Box from "../models/Box";
import Plane from "../models/Plane";

function Scene() {
  return (
    <>
      <ambientLight color={"white"} intensity={0.3} />
      <spotLight
        color={"white"}
        intensity={5}
        distance={6.0}
        position={[-1, 0.5, 1.0]}
        penumbra={0.0}
        castShadow
      />
      <Box position={[3, 0, 2]} />
      <Plane position={[0.0, -1.0, 0.0]} />
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
