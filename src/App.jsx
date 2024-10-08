import { Canvas, useThree } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, Lightformer, Text, useAspect } from "@react-three/drei";
import { Fog } from "three";
import { Suspense } from "react";
import Particles from "./components/Particle";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  HueSaturation,
  SMAA,
  Vignette,
} from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import CameraRig from "./components/CameraRig";
import { Camp } from "./components/Camp";
import { Flex, Box } from "@react-three/flex";

function TextContainer() {
  const { size } = useThree();
  const [vpWidth] = useAspect("cover", size.width, size.height);

  return (
    <>
      <Text
        fontSize={8}
        color="#E0F2FE"
        font="BigShouldersDisplay-Medium.ttf"
        position={[7, 3, -9]}
        rotation={[0, -Math.PI / 2 + Math.PI / 4, 0]}
      >
        CAMPING
      </Text>

      <Text
        position={[7, -1, -9]}
        fontSize={1}
        textAlign="justify"
        font="BigShouldersDisplay-Medium.ttf"
        color="#E0F2FE"
        rotation={[0, -Math.PI / 2 + Math.PI / 4, 0]}
      >
        Under the towering pines, a purple sedan rested on the grassy
      </Text>
    </>
  );
}

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [-18, 7, 18], fov: 30 }}
      gl={{ antialias: false, alpha: false }}
      dpr={1}
    >
      <OrbitControls
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 6}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        minDistance={10}
        maxDistance={40}
        enablePan={false}
      />
      {/* <CameraRig> */}
      <color attach="background" args={["#ECFEFF"]} />
      <Environment preset="city">
        <Lightformer
          form="rect"
          intensity={10}
          position={[2, 3, 3]}
          scale={2}
        />
        <Lightformer
          form="rect"
          intensity={10}
          position={[0, 0, 3]}
          scale={2}
        />
      </Environment>
      <fog attach="fog" color="#BAE6FD" near={20} far={150} />
      <Suspense fallback={null}>
        <Camp scale={0.5} />;
      </Suspense>
      <Particles />
      <EffectComposer multisampling={2}>
        <SMAA />
        <Bloom
          mipmapBlur
          intensity={1.5}
          levels={9}
          luminanceSmoothing={1.9}
          luminanceThreshold={0.9}
        />
        <DepthOfField focusDistance={0.009} focalLength={0.2} bokehScale={2} />
        <HueSaturation saturation={0.3} hue={0.4} />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>

      <TextContainer />

      {/* </CameraRig> */}
    </Canvas>
  );
}

export default App;
