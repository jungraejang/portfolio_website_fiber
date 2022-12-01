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
      }}>
      <div>
        {' '}
        <h1 className="font-face-bs " style={{ color: '#000', textShadow: '2px 1px 0px rgba(255,255,255,1)' }}>
          EXPERIENCE
        </h1>
      </div>
      {/* <div style={{ display: ' flex', flexDirection: 'row' }}>
        <h6 style={{ color: '#3200FC' }} className="text-shadow">
          Name:{' '}
        </h6>
        <h4 style={{ marginLeft: 20 }}>Jung Rae Jang</h4>
      </div> */}
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
