import React from 'react'

function Experience() {
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
        paddingBottom: '20vh',
      }}>
      <div>
        {' '}
        <h1 className="font-face-bs dark-text" style={{}}>
          EXPERIENCE
        </h1>
      </div>

      <div style={{ display: ' flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h5 style={{ fontSize: 16, opacity: 1, zIndex: 3 }} className="font-face-ro text-shadow">
          Citibank - Technology Analyst (2020-2022) <br />
          Pursuit - Associate Instructor (2019-2022)
        </h5>
      </div>
    </div>
  )
}

export default Experience
