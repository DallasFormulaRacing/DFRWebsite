// "use client";
// import React, { Suspense, useEffect, useReducer } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";


// function Test() {
//     const [flag, toggle] = useReducer((state) => !state, true);
//     useEffect(() => {
//         const interval = setInterval(toggle, 1000);
//         return () => clearInterval(interval);
//     }, []);
//     const { scene } = useLoader(GLTFLoader, "/car_model/scene.gltf") as any;
//     return <primitive object={scene} />;
// }

// const CarModel = () => {
//     const { car } = useLoader(GLTFLoader, "/car_model/scene.gltf") as any;
//     return <primitive object={car} />;
// };

// const Scene = () => {
//     return (
//         <>
//             <gridHelper />
//             <Test />
//         </>
//     );
// };

// export default function Car() {
//     return (
//         // <Canvas>
//         //     <ambientLight color={"0x404040"}/>
//         //     <directionalLight color={"0xffffff"} position={[0, 1, 0]}/>
//         //     <Suspense fallback={null}>
//         //         <Test/>
//         //     </Suspense>
//         //     <camera position={[800, 100, 1000]}/>
//         //     <OrbitControls/>
//         // </Canvas>
//         <div>
//             <Canvas
//                 camera={{
//                     near: 0.1,
//                     far: 1200,
//                     zoom: 1,
//                 }}
//                 onCreated={({ scene, gl }) => {
//                     scene.background = new THREE.Color(0xdddddd);
//                     gl.setSize(window.innerWidth, window.innerHeight);
//                 }}
//             >
//                 <OrbitControls />
//                 <ambientLight color={"0x404040"} />
//                 <directionalLight color={"0xffffff"} position={[0, 1, 0]} />
//                 <pointLight
//                     color={"0xc4c4c4"}
//                     intensity={0.1}
//                     position={[0, 300, 500]}
//                 />
//                 <pointLight
//                     color={"0xc4c4c4"}
//                     intensity={0.1}
//                     position={[500, 100, 0]}
//                 />
//                 <pointLight
//                     color={"0xc4c4c4"}
//                     intensity={0.1}
//                     position={[0, 100, -500]}
//                 />
//                 <pointLight
//                     color={"0xc4c4c4"}
//                     intensity={0.1}
//                     position={[-500, 300, 500]}
//                 />
//                 <Suspense fallback={null}>
//                     <Scene />
//                 </Suspense>
//             </Canvas>
//         </div>
//     );
// }
