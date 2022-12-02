import * as THREE from 'three'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'

function Ready({ setReady }) {
  useEffect(() => () => void setReady(true), [])
  return null
}

export default function Name() {
  const [ready, setReady] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize())

  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  useEffect(() => {}, [ready])

  // console.log('window', windowSize)
  return (
    <Canvas
      concurrent
      gl={{ alpha: false }}
      onCreated={state => state.gl.setClearColor(0xffffff, 0)}
      pixelRatio={[1, 1.5]}
      camera={{ position: [0, 0, 80], fov: 50 }}>
      <Suspense fallback={<Ready setReady={setReady} />}>
        <group position={[0, 0, 0]}>
          <VideoText position={[0, 0, 0]} windowSize={windowSize} />
        </group>
      </Suspense>
    </Canvas>
  )
}

function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: '/drei.mp4',
      crossOrigin: 'anonymous',
      loop: true,
      muted: true,
      //below is necessary to play video on ios
      playsInline: true,
    })
  )
  useEffect(() => void video.play(), [video])
  return (
    <>
      <Text
        font="/PassionOne-Bold.ttf"
        fontSize={props.windowSize.innerWidth <= 1000 ? Math.round(props.windowSize.innerWidth / 15.6) : 64}
        letterSpacing={0}
        overflowWrap={'normal'}
        {...props}>
        Jung Rae Jang
        <meshBasicMaterial toneMNameed={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
    </>
  )
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3())
  return useFrame(state => {
    state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
