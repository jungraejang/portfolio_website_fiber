import React from 'react'
import Name from './Name'
function Welcome() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        fontSize: 30,
        display: 'flex',
        // marginLeft: 20,
        // marginRight: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        paddingTop: 100,
      }}>
      <div style={{ width: '100vw' }}>
        <Name />
      </div>
    </div>
  )
}

export default Welcome
