import React, { useRef, useEffect } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Mesh } from 'three'
import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { selectScrollPosition, setScrollPosition } from '../slices/eventSlice'

function ProfileImage() {
  let scrollPosition = useSelector(selectScrollPosition)

  return (
    <div
      style={{
        height: '50vh',
        width: '100vw',
        fontSize: 30,
        display: 'flex',
        // marginLeft: 20,
        // marginRight: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        paddingTop: 80,
        paddingBottom: '15vh',
      }}>
      <div style={{ width: '100vw', height: '20vh' }}>
        <Canvas>
          <ambientLight />
          {/* <pointLight position={[10, 10, 10]} /> */}

          <ImageBox scrollPosition={scrollPosition} />
        </Canvas>
      </div>
    </div>
  )
}

function ImageBox({ scrollPosition }) {
  const mesh = useRef()
  const colorMap = useLoader(TextureLoader, '/8bit_portrait.png')
  useFrame((state, delta) => {
    // mesh.current.rotation.x += 0.01
    // mesh.current.rotation.y += 0.01
  })
  useEffect(() => {
    mesh.current.rotation.z = scrollPosition * 0.3
    // mesh.current.rotation.y = scrollPosition * 0.0013
    mesh.current.rotation.x = scrollPosition * -0.3

    mesh.current.position.x = scrollPosition * 0.2
    mesh.current.position.z = scrollPosition * -0.2
  }, [scrollPosition])
  return (
    <Box ref={mesh}>
      <boxGeometry args={[5, 5, 5, 5]} />
      <meshStandardMaterial map={colorMap} />
    </Box>
  )
}

export default ProfileImage
