import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PositionalAudio, OrbitControls, Html } from '@react-three/drei'
import { Provider, useDispatch, useSelector } from 'react-redux'
import City from './components/City'
import About from './components/About'
import Main from './components/Main'
import { store } from './store/store'
import { selectScrollPosition, setScrollPosition } from './slices/eventSlice'

export default function App({ ready }) {
  // const [scrollPosition, setScrollPosition] = useState(0)
  return (
    <>
      <City ready={ready} />
      {/* <div style={{ position: 'absolute', overflow: 'scroll', zIndex: 1, width: '100vw', height: '100vh' }}>
        <About />
        <About />
        <About />
        <About />
        <About />
      </div> */}
      <Main />
    </>
  )
}
