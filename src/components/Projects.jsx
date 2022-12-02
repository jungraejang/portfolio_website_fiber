import Accordion from './common/ControlledAccordions'
import React from 'react'

let projects = [
  {
    name: 'Citi Composition Tool (Citi Commercial Banking)',
    tech: 'React/Redux, TypeScript, Java',
    github: '',
    imageLink: '',
    bgcolor: '#fff',
    description:
      'A tool used by business/banking associates to share documents amongst peers, managers, and clients with strict permission control and audit functionalities',
  },
  {
    name: 'Onboarding Portal Migration (Citi PB Onboarding Tech)',
    tech: 'Angular, Vaadin, Sass, NodeJS',
    github: '',
    imageLink: '',
    bgcolor: '#D4FF02',

    description:
      'Migration of Vaadin application to Angular. Built a proof -of-concept application using rules engine to handle some of business logics in frontend to reduce the number of API calls to the server',
  },

  {
    name: 'Citi Lingo',
    tech: 'React, CSS, Socket.IO, AWS',
    github: 'https://github.com/jungraejang/aws_socket_react_chat',
    bgcolor: '#b8c305',

    imageLink:
      'https://camo.githubusercontent.com/6420fca5bd0de24a0254bcdd542994a7299a38012c8d5fceaf372f71cad66404/68747470733a2f2f692e696d6775722e636f6d2f4459545a37784a2e676966',
    description:
      'A real time chat app where users can select their native language and target language to translate messages using AWS Translate. Built as part of Hackathon with idea of bridging language gap for non-English speaking clients',
  },

  {
    name: 'BottomLine',
    tech: 'React, Adobe Photoshop, Express, CSS, NodeJS, Material-UI, Chart-JS',
    github: 'https://github.com/jungraejang/bottomline-app',
    imageLink: 'https://i.ibb.co/gwXzP7Y/bottomline-logo-small.png',
    bgcolor: '#88500f',
    description:
      'A mock stock trading app where users can purchase stocks based on most up-to-date prices, view portfolios, and also view all transactions for audit purposes. Users can also set an initial investment amount upon signing',
  },
]

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
        <h1 className="font-face-bs dark-text " style={{}}>
          PROJECTS
        </h1>
      </div>
      <div>
        <Accordion projects={projects} />
      </div>
    </div>
  )
}

export default Projects
