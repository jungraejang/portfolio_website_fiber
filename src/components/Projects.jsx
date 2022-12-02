import React from 'react'

function Projects() {
  return (
    <div
      style={{
        // height: '100vh',
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
        <h1 className="font-face-bs dark-text " style={{ textShadow: '2px 1px 0px rgba(255,255,255,1)' }}>
          PROJECTS
        </h1>
      </div>

      <div style={{ display: ' flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h5 style={{ fontSize: 24, opacity: 1, zIndex: 3 }} className="font-face-ro text-shadow">
          Citi Composition Tool (Maker-Checker)
        </h5>
        <p style={{ fontSize: 12 }}>
          A tool used by business/banking associates to share documents amongst peers, managers, and clients with strict
          permission control and audit functionalities.
        </p>
        <p style={{ fontSize: 12 }}>Tech: React, CSS, Socket.IO, AWS, Firebase</p>
      </div>
      <div style={{ display: ' flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h5 style={{ fontSize: 24, opacity: 1, zIndex: 3 }} className="font-face-ro text-shadow">
          CIti Lingo
        </h5>
        <p style={{ fontSize: 12 }}>
          A real time chat app where users can select their native language and target language to translate messages
          using AWS Translate. Built as part of Hackathon with idea of bridging language gap for non-English speaking
          clients
        </p>
        <p style={{ fontSize: 12 }}>Tech: React, CSS, Socket.IO, AWS</p>
      </div>
      <div style={{ display: ' flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h5 style={{ fontSize: 24, opacity: 1, zIndex: 3 }} className="font-face-ro text-shadow">
          BottomLine
        </h5>
        <p style={{ fontSize: 12 }}>
          A mock stock trading app where users can purchase stocks based on most up-to-date prices, view portfolios, and
          also view all transactions for audit purposes. Users can also set an initial investment amount upon signing
          up.
        </p>
        <p style={{ fontSize: 12 }}>Tech: React, Adobe Photoshop, Express, CSS, NodeJS, Material-UI, Chart-JS</p>
      </div>
      <div style={{ display: ' flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h5 style={{ fontSize: 24, opacity: 1, zIndex: 3 }} className="font-face-ro text-shadow">
          Onboarding Portal Migration (Citi PB Onboarding Tech)
        </h5>
        <p style={{ fontSize: 12 }}>
          Migration of Vaadin application to Angular. Built a proof -of-concept application using rules engine to handle
          some of business logics in frontend to reduce the number of API calls to the server
        </p>
        <p style={{ fontSize: 12 }}>Tech: Angular, Vaadin, Sass, NodeJS </p>
      </div>
    </div>
  )
}

export default Projects
