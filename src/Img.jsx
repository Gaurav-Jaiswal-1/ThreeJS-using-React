// import React from 'react'
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Img = () => {
  // Load texture from the provided path
  let tex = useTexture('./src/sunlight.jpeg');
  let cyl = useRef(null)
  useFrame((state, delta) => {
      cyl.current.rotation.y += delta
  }) 
  return (

    <group rotation={[0,1.4, 0.5]}>

    <mesh ref={cyl} >
      <cylinderGeometry args={[1, 1, 1, 20, 20, true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
    </group>
  );
}

export default Img;
