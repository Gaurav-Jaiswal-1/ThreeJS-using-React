// import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './style.css';
import Img from './Img';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';


const App = () => {
  return (
    <Canvas flat camera={{fov:40}}>
      <OrbitControls />
      <ambientLight />
      <Img/>
      <EffectComposer
  
  >
      <Bloom

      mipmapBlur
    intensity={12.0} // The bloom intensity.
  
    luminanceThreshold={0.1} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
   
  />

  <ToneMapping adaptive></ToneMapping>

  </EffectComposer>




    
    </Canvas>
  );
};

export default App;
