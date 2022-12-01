import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { selectScrollPosition, setScrollPosition } from '../slices/eventSlice'
import About from './About'
import Experience from './Experience'
import Name from './Name'
import Projects from './Projects'
import Skills from './Skills'
import Welcome from './Welcome'

function Main() {
  let dispatch = useDispatch()
  let scrollPosition = useSelector(selectScrollPosition)

  const handleScroll = e => {
    const target = e.target ? e.target : null
    console.log('Current scroll position:', target.scrollTop)
    dispatch(setScrollPosition(target.scrollTop))
  }

  console.log(scrollPosition)
  return (
    <div
      style={{
        position: 'absolute',
        overflow: 'auto',
        top: 0,
        zIndex: 1,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: 'column',
        // backgroundColor: 'rgba(0,0,0,0.0)',
        // alignItems: 'center',
      }}
      onScroll={handleScroll}>
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  )
}

export default Main
