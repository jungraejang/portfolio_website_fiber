import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { selectScrollPosition, setScrollPosition } from '../slices/eventSlice'
import About from './About'

function Main() {
  let dispatch = useDispatch()
  let scrollPosition = useSelector(selectScrollPosition)

  const handleScroll = () => {
    const position = window.pageYOffset
    dispatch(setScrollPosition(position))
  }

  const scrollEvent = e => {
    const target = e.target ? e.target : null
    console.log('Current scroll position:', target.scrollTop)
    dispatch(setScrollPosition(target.scrollTop))
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true })

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  console.log(scrollPosition)
  return (
    <div
      style={{ position: 'absolute', overflow: 'scroll', zIndex: 1, width: '100vw', height: '100vh' }}
      onScroll={scrollEvent}>
      <About />
      <About />
      <About />
      <About />
      <About />
    </div>
  )
}

export default Main
