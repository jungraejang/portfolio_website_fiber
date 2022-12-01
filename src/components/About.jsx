import React from 'react'
import Paper from '@mui/material/Paper'

function About() {
  return (
    <div
      style={{
        height: '100vh',
        width: '80vw',
        fontSize: 30,
        // display: 'flex',
        // marginLeft: 20,
        // marginRight: 20,
        flexDirection: 'column',
        // alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        paddingBottom: '15vh',
      }}>
      <div>
        {' '}
        <h1 className="font-face-bs dark-text" style={{ textShadow: '2px 1px 0px rgba(255,255,255,1)' }}>
          QUI SUIS-JE?
        </h1>
      </div>

      <div style={{ display: ' flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h5 style={{ fontSize: 16, opacity: 1, zIndex: 3 }} className="font-face-ro text-shadow">
          I am a Fullstack web developer who enjoys analyzing problems and sharing creative solutions to improve both
          myself and those around me. <br />
          <br />
          I’ve always been drawn to creating cool stuff whether they are technical or artistic in nature. <br />
          <br /> I like to tinker with Raspberry Pi or print cool 3D sculptures during my free time. I am also an avid
          gamer who enjoys playing Starcraft 2, Dota 2, and Civilization series.
        </h5>
      </div>
    </div>
  )
}

export default About
