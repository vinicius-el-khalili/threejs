"use client"

import { PerspectiveCamera } from "@react-three/drei"
import style from "./joe.module.scss"
const degree = (deg:number) => { return (Math.PI/180)*deg }

const Joe = () => {
    return (
        <>

        <PerspectiveCamera makeDefault position={[0,-2,15]}/>

        <mesh>

            <sphereGeometry/>
            <meshStandardMaterial color={"white"} />

        </mesh>

        <mesh rotation={[degree(90),degree(0),0]}>

            <planeGeometry args={[7,7]}/>
            <meshStandardMaterial color={"red"} />

        </mesh>

        <ambientLight color={"white"} intensity={1}/>
        
        </>
    );
}
 
export default Joe;