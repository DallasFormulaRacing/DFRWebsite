"use client"
import React, { Suspense, useEffect, useReducer} from 'react';
import { Canvas, useLoader, } from "@react-three/fiber"
import { GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';

function Test() {
    const [flag, toggle] = useReducer((state) => !state, true)
    useEffect(() =>{
        const interval = setInterval(toggle, 1000)
        return () => clearInterval(interval)
    }, []);
    const { scene } = useLoader(GLTFLoader, '/scene.gltf') as any
    return <primitive object={scene}/>
}



export default function TestModel(){
    return (
        <Canvas>
            <ambientLight/>
            <Suspense fallback={null}>
                <Test/>
            </Suspense>
        </Canvas>
    )
}
