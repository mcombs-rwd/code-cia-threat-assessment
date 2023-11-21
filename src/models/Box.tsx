import { useRef, useState } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

import type { ComponentPropsWithoutRef } from "react";
interface MeshProps extends ComponentPropsWithoutRef<"mesh"> {}

function Box({ ...props }: MeshProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const meshRef = useRef<Mesh>(null!);
  // Hold state for hovered and clicked events
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((_state, delta) => (meshRef.current.rotation.x += delta));

  // boxGeometry is width, height, depth
  return (
    <mesh
      {...props}
      ref={meshRef}
      castShadow
      receiveShadow
      scale={isActive ? 1.5 : 1}
      onClick={() => setActive(!isActive)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1.5, 2.5]} />
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default Box;
