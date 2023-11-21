import { useEffect, useRef } from "react";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

import Box from "../models/Box";
import Plane from "../models/Plane";
import Sphere from "../models/Sphere";

function Scene() {
  const sphereRef = useRef(null!);
  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!sphereRef.current) {
      console.log(sphereRef.current);
      const timeline = gsap.timeline({ paused: true });
      timeline.to(sphereRef.current.position, {
        y: 0.8,
        duration: 2,
        ease: "bounce",
      });
      timeline.to(
        sphereRef.current.position,
        {
          x: 1.25,
          duration: 2,
          ease: "power2.out",
        },
        "<"
      );
      timeline.play();
    }
  }, []);

  return (
    <>
      <ambientLight color={"white"} intensity={0.3} />
      <spotLight
        color={"white"}
        intensity={25}
        distance={15.0}
        position={[-5, 0.0, 1.0]}
        penumbra={0.0}
        castShadow
      />
      <Sphere position={[7.0, 1.0, 2]} ref={sphereRef} />
      <Box position={[2, -0.75, 2]} />
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
