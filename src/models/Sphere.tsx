// import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";
import { forwardRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";

import type { ComponentPropsWithRef } from "react";
import { Mesh } from "three";
type Ref = Mesh;
interface MeshProps extends ComponentPropsWithRef<"mesh"> {}

const Sphere = forwardRef<Ref>(({ ...props }: MeshProps, ref) => {
  // This reference gives us direct access to the THREE.Mesh object
  // const meshRef = useRef<Mesh>(null!);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  // Hold state for hovered and clicked events
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);

  // SphereGeometry is radius, latitude segments, longitude segments
  return (
    <mesh
      {...props}
      ref={ref}
      castShadow
      receiveShadow
      scale={isActive ? 1.25 : 1}
      onClick={() => setActive(!isActive)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color={isHovered ? "yellow" : 0x00ff83}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
});

export default Sphere;
