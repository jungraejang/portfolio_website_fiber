import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { selectScrollPosition, setScrollPosition } from '../slices/eventSlice'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Name from './Name'
import ProfileImage from './ProfileImage'
import Projects from './Projects'
import Skills from './Skills'
import Welcome from './Welcome'

function Main() {
  let dispatch = useDispatch()
  let scrollPosition = useSelector(selectScrollPosition)

  const handleScroll = e => {
    const target = e.target ? e.target : null
    // console.log('Current scroll position:', target.scrollTop)
    dispatch(setScrollPosition(target.scrollTop))
  }

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
      <ProfileImage />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default Main
