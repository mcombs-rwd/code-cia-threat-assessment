// import { useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
interface MeshProps extends ComponentPropsWithoutRef<"mesh"> {
  // props: string;
}
// import { useFrame } from "@react-three/fiber";

function Box({ ...props }: MeshProps) {
  // This reference gives us direct access to the THREE.Mesh object
  // const meshRef = useRef();
  // Hold state for hovered and clicked events
  // const [isHovered, setHovered] = useState(false);
  // const [isActive, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      castShadow
      receiveShadow
      scale={1}
    >
      <boxGeometry args={[1, 1.5, 2.5]} /> {/* width, height, depth */}
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

export default Box;

// ref={meshRef}
// onClick={(event) => setActive(!isActive)}
// onPointerOver={(event) => setHovered(true)}
// onPointerOut={(event) => setHovered(false)}
