import { useState, useRef } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import style from './App.css';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
if (localStorage.getItem('firstTime') == null) {
  alert('First Time Alert');
  localStorage.setItem('firstTime', 'done');
}

const handleClick = () => {};

export default function App() {
  return (
    <>
      <h1>hello world</h1>

      <Canvas className={style.canvas1}>
        <Box position={[2, 0, 0]} />
        <OrbitControls />
      </Canvas>
      <Canvas className={style.canvas2}>
        <Box position={[-0, 2, 0]} />
        <OrbitControls />
      </Canvas>
      <Canvas className={style.canvas3}>
        <Box position={[-0, 0, 2]} />
        <OrbitControls />
      </Canvas>
    </>
  );
}
