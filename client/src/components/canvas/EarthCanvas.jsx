import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { EarthCanvasContainer } from "../StyledComponents";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={3} position={[0, 0, 0]} />
  );
};

const EarthCanvas = () => {
  const [isInView, setIsInView] = useState(true);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = canvasContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [canvasContainerRef]);

  return (
    <EarthCanvasContainer ref={canvasContainerRef}>
      <Canvas
        camera={{
          fov: 75,
          position: [0, 0, 5]
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls
            autoRotate={isInView}
            enableZoom={false}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </EarthCanvasContainer>
  );
};

export default EarthCanvas;
