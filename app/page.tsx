"use client"

import styles from './page.module.css'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

class Sprite {
  x:number
  y:number
  z:number
  t:number
  constructor(x:number,y:number,z:number){
    this.x = x
    this.y = y
    this.z = z
    this.t=0

  }
  move(delta:number){

    this.t+=delta

  }
  
}

const Box = (props:any) => {

  const ref = useRef<null|any>(null)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const sprite = new Sprite(0,0,0)
  
  useFrame((state, delta)=>{

    sprite.move(delta)
    ref.current.position.x = sprite.x
    ref.current.position.y = sprite.y
    ref.current.position.z = sprite.z
    ref.current.rotation.x += delta
    ref.current.rotation.y -= delta
    ref.current.rotation.z -= .5*delta

  })

  return (

  <>

  <mesh
  {...props}
  ref={ref}
  scale={clicked?1.5:1}
  onClick={(e:any)=>{e.stopPropagation();hover(true)}}>

    <sphereGeometry />
    <boxGeometry/>
    <meshStandardMaterial color={"white"} metalness={0} roughness={5}/>

  </mesh>

  </>

)
}


export default function Home() {



  return <>
  
    <main>

      <Canvas className={styles.Canvas}>

        <ambientLight intensity={.1} />
        <spotLight position={[-10,-10,10]} angle={0.15} penumbra={20} decay={0} intensity={10} />
        <pointLight position={[12,12,12]} decay={0} intensity={.5} />
        <Box/>

      </Canvas>

    </main>
  
  </>
}
