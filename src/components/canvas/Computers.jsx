import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader'
import { mobile } from "../../assets";
import { motion } from "framer-motion";




 const Computers = ({Mobile})=> {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15} 
        groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive 
        object={computer.scene}
        /* scale={0.75}
        position={[0,-3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} */
        scale={Mobile ? 1:1.30}
        position={Mobile ?[0,-1.40, 0]:[0,-1.80, 0]}
        rotation={[-0.01, 0.4, -0.05]}
        
      ></primitive>
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [Mobile, setMobile] = useState(false)

  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange)
    
    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
      
    }


  },[])
  return(
    <motion.div
    initial= {{opacity: 0}}
    whileInView= {{
      opacity: 1,
      transition: {duration: 3}
    }}
    animate={{
        y: [0, 24, 0],
        transition: {repeat: Infinity, duration: 2}
      }}
      transition={{
        repeatType: 'loop'
      }}
    className='w-full h-[100%]'
    
    >
    <Canvas 
      frameloop="demand" 
      shadows 
      camera={{position:[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        {/* <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        /> */}
        <Computers Mobile={Mobile}/>
      </Suspense>

      <Preload all/>

    </Canvas>
    </motion.div>
  )
}
export default ComputersCanvas;
