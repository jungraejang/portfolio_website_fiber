import React from 'react'
import Paper from '@mui/material/Paper'
import ProfileImage from './ProfileImage'

function About() {
  return (
    <div
      style={{
        height: '100vh',
        width: '80vw',
        // fontSize: 30,
        display: 'flex',
        // marginLeft: 20,
        // marginRight: 20,
        flexDirection: 'column',
        // alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        paddingBottom: '20vh',
      }}>
      <div>
        {' '}
        <h1 className="font-face-bs dark-text " style={{ fontSize: 60 }}>
          QUI SUIS-JE?
        </h1>
      </div>

      <div
        style={{
          display: ' flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          // backgroundColor: '#191D21',
          // padding: '5px 0px 0px 5px',
          // justifyContent: 'flex-start',
          lineHeight: 2,
        }}>
        <div className="about-page-text-p-container">
          <p style={{}} className="font-face-ro  about-page-text-bg about-page-text-p">
            I am a <span className="about-page-text-hl">Fullstack web developer</span> who{' '}
            <span className="about-page-text-hl">enjoys</span> analyzing{' '}
            <span className="about-page-text-hl">problems</span> <span className="about-page-text-hl">and</span> sharing
            <span className="about-page-text-hl">creative solutions</span> to improve both myself and those around me.
          </p>
        </div>
        <div className="about-page-text-p-container">
          <p style={{}} className="font-face-ro  about-page-text-bg about-page-text-p">
            I’ve always been drawn to creating cool stuff <span className="about-page-text-hl">whether they are</span>{' '}
            technical or artistic in nature. <br />
          </p>
        </div>
        <div className="about-page-text-p-container">
          <p style={{}} className="font-face-ro about-page-text-bg about-page-text-p">
            I like to tinker with <span className="about-page-text-hl">Raspberry Pi or</span> print cool 3D sculptures
            during my free time. I am also an avid gamer who enjoys playing{' '}
            <span className="about-page-text-hl">Starcraft 2</span>, Dota 2, and Civilization series.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
