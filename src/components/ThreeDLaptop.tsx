import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const ThreeDLaptop: React.FC = () => {

  const { scene } = useGLTF('../src/assets/macbook-pro.glb');
  const texture = useLoader(TextureLoader, '../src/assets/down-arrow.png');

  return (
    <group  position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
      <primitive object={scene} />
      <mesh position={[0, 0.055, 0.081]} rotation-x={-Math.PI / 4} geometry={new THREE.PlaneBufferGeometry(0.16, 0.09)}>
  <meshBasicMaterial attach="material" color="#ffffff" />
  <meshBasicMaterial attach="material" transparent map={texture} />
</mesh>
    </group>
  );
};

export default ThreeDLaptop;