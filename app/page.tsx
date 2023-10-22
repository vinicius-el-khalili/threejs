"use client"

import Joe from "@/components/three/joe";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
    
    <h1>three.js</h1>
    <Canvas className={""}>

        <Joe/>

    </Canvas>

    </>
  );
}
 
export default Home;