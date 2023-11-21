import { Environment } from "@react-three/drei";
import * as THREE from "three";

import Box from "../models/Box";
import Plane from "../models/Plane";
import Sphere from "../models/Sphere";

function Scene() {
  return (
    <>
      <ambientLight color={"white"} intensity={0.3} />
      <spotLight
        color={"white"}
        intensity={15}
        distance={15.0}
        position={[-4, 0.5, 1.0]}
        penumbra={0.0}
        castShadow
      />
      <Sphere position={[7.0, 1.0, 2]} />
      <Box position={[2, 0, 2]} />
      <Plane position={[0.0, -1.0, 0.0]} />
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 32, 32]} />
          <meshBasicMaterial color="#3b3378" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}

export default Scene;
