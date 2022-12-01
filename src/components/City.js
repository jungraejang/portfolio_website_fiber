import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PositionalAudio, OrbitControls, Html } from '@react-three/drei'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { selectScrollPosition, setScrollPosition } from '../slices/eventSlice'

import React from 'react'

function City({ ready }) {
  let scrollPosition = useSelector(selectScrollPosition)

  return (
    <div className="background">
      <Canvas camera={{ position: [0, 2, 20], fov: 40 }}>
        <fog attach="fog" args={['#D4FF00', 0, 400]} />
        <Model ready={ready} scrollPosition={scrollPosition} />
        {/* <OrbitControls
          // autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
      </Canvas>
    </div>
  )
}

function Model({ ready, scrollPosition }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene-draco.glb')
  console.log('ref', group, nodes)
  useFrame(() => (group.current.rotation.y += 0.0005))
  useEffect(() => {
    group.current.rotation.y = scrollPosition * 0.0013
  }, [scrollPosition])
  return (
    //camera position
    <group ref={group} scale={0.001} position={[0, 0, -80]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-102253.52, -210688.86, -17050.52]}>
          <mesh material={materials.Scene_Root} geometry={nodes.mesh_0.geometry} />
          <mesh material={materials.Scene_Root} geometry={nodes.mesh_1.geometry} />
          <mesh material={materials.Scene_Root} geometry={nodes.mesh_2.geometry} />
          <mesh material={materials.Scene_Root} geometry={nodes.mesh_3.geometry} />
        </group>
        <group position={[100000, 120000, 2000]}>
          {ready && <PositionalAudio autoplay loop url="/zapsplat_icecream.mp3" distance={5} />}
        </group>
        <mesh position={[250000, -200000, 50000]}>
          <sphereGeometry args={[30000, 32, 32]} />
          <meshBasicMaterial color="#fff" />
        </mesh>
      </group>
    </group>
  )
}

export default City
