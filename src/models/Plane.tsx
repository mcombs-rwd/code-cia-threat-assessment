import { useRef, useState } from "react";
import { Mesh } from "three";
// import { useFrame } from "@react-three/fiber";

import angleToRadians from "../utils/angle";

import type { ComponentPropsWithoutRef } from "react";
interface MeshProps extends ComponentPropsWithoutRef<"mesh"> {}

function Plane({ ...props }: MeshProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const meshRef = useRef<Mesh>(null!);
  // Hold state for hovered and clicked events
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((_state, delta) => (meshRef.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      receiveShadow
      rotation={[-angleToRadians(90), 0, 0]}
      scale={isActive ? 1.25 : 1}
      onClick={() => setActive(!isActive)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={isHovered ? "white" : "silver"} />
    </mesh>
  );
}

export default Plane;