/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useMemo, useRef } from "react";
import { useGLTF, MeshTransmissionMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Flex, Box } from "@react-three/flex";
import cellularNoiseShaderSource from "./CellularNoiseShader.glsl?raw";

// const model = useGLTF("/models/miniature world.glb");

export function Camp(props) {
  const { nodes, scene, materials } = useGLTF("/models/miniature world.glb");
  const smokeRef = useRef();

  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        transmission: 0.8,
        transparent: true,
        opacity: 0.5,
        thickness: 1,
        roughness: 0.1,
        ior: 1.9,
        metalness: 0,
        envMapIntensity: 1,
      }),
    []
  );

  const baseMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#44403C",
        metalness: 0.5,
        roughness: 0.5,
      }),
    []
  );

  const smokeShaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scale: { value: 5.0 }, // Add scale uniform
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: cellularNoiseShaderSource,
      transparent: true,
      depthWrite: false,
    });
  }, []);

  useFrame((state) => {
    if (smokeRef.current) {
      smokeRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  React.useEffect(() => {
    scene.traverse((child) => {
      if (
        (child.isMesh && child.material.name === "Smoke_albedo.001") ||
        (child.isMesh && child.material.name === "Fire_albedo.001") ||
        (child.isMesh && child.material.name === "grass.001") ||
        (child.isMesh && child.material.name === "pine2")
      ) {
        child.material.transparent = true;
        // child.material.depthWrite = false;
      }

      if (child.isMesh && child.material.name === "Sphere") {
        child.material = globeMaterial;
      }
    });
  }, [scene, globeMaterial]);

  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, Math.PI / 2 - Math.PI / 7, 0]}
      position={[0, -3, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pine1001.geometry}
        material={materials.pine2}
        position={[4.104, 4.043, -3.832]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10.113}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pine1002.geometry}
        material={materials.pine2}
        position={[1.532, 3.177, 3.685]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={7.947}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pine1003.geometry}
        material={materials.pine2}
        position={[5.661, 4.043, 1.018]}
        rotation={[Math.PI / 2, 0, -0.818]}
        scale={10.113}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BushFlowerSmall001.geometry}
        material={materials.bushflower}
        position={[-1.599, 0.226, -4.422]}
        rotation={[Math.PI / 2, 0.288, -Math.PI / 2]}
        scale={[1.363, 1.367, 1.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BushSmall001.geometry}
        material={materials.bushType1}
        position={[-0.278, 0.149, -5.497]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BushSmall2001.geometry}
        material={materials.bush2}
        position={[-2.849, 0.046, -4.101]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.363, 1.041, 1.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree2001.geometry}
        material={materials.tree2}
        position={[-3.068, 1.473, 3.369]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.773, 3.773, 4.333]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BushFlowerSmall002.geometry}
        material={materials.bushflower}
        position={[-4.423, 0.143, 2.226]}
        rotation={[1.283, 0.005, -0.017]}
        scale={[1.363, 1.367, 1.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BushSmall002.geometry}
        material={materials.bushType1}
        position={[-3.326, 0.372, 3.528]}
        rotation={[Math.PI / 2, 0, -0.017]}
        scale={1.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BushSmall2002.geometry}
        material={materials.bush2}
        position={[-4.766, -0.275, 0.982]}
        rotation={[Math.PI / 2, 0, -0.017]}
        scale={[1.363, 1.041, 1.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BushSmall2003.geometry}
        material={materials.bush2}
        position={[-4.155, -0.155, 0.198]}
        rotation={[Math.PI / 2, 0, -0.017]}
        scale={[1.363, 1.041, 1.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BushSmall2004.geometry}
        material={materials.bush2}
        position={[-3.718, -0.01, -2.773]}
        rotation={[Math.PI / 2, 0, -0.017]}
        scale={[1.363, 1.041, 1.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barbecue_Plane001.geometry}
        material={materials["Barbecue.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Car_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002_Circle001.geometry}
        material={materials["Wood.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003_Circle001.geometry}
        material={materials["Wood.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[0, 0, -0.162]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_Circle001_1.geometry}
          material={materials["Wood.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_Circle001_2.geometry}
          material={materials.Line_}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009_Circle001.geometry}
        material={materials["Wood.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_Cube002.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020_Cube001.geometry}
        material={materials.Vaz_2107}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024_Cube001.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Cube002.geometry}
        material={materials["Stones.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fire_albedo001.geometry}
        material={materials["Fire_albedo.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grass_albedo001_grass_albedo001.geometry}
        material={materials["grass.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grass_albedo002_grass_albedo001.geometry}
        material={materials["grass.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grass_albedo004_grass_albedo001.geometry}
        material={materials["grass.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grass_albedo009_grass_albedo001.geometry}
        material={materials["grass.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grass_albedo010_grass_albedo001.geometry}
        material={materials["grass.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grass_albedo011_grass_albedo001.geometry}
        material={materials["grass.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Plane001.geometry}
        material={materials["Brick.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        ref={smokeRef}
        castShadow
        receiveShadow
        geometry={nodes.Smoke_albedo001.geometry}
        material={smokeShaderMaterial}
        position={[0, 0.2, -0.162]}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Soil_Plane002.geometry}
        material={materials["soil.001"]}
        position={[0, 0, -0.162]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={baseMaterial}
        position={[0, 0, -0.418]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Sphere}
        position={[0, 5.666, -0.418]}
        scale={9.1}
      >
        <MeshTransmissionMaterial
          thickness={0.05}
          anisotropy={0.2}
          ior={1.9}
          chromaticAberration={0.02}
          // depthWrite={false} // Important to allow objects behind to be visible
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/miniature world.glb");
