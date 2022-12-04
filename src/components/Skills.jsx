import React from 'react'

let imgArr = [
  'https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github',
  'https://img.shields.io/badge/-BitBucket-darkblue?style=flat-square&logo=bitbucket',
  'https://img.shields.io/badge/Python-14354C?style=flat-square&logo=python&logoColor=white',
  'https://img.shields.io/badge/HTML-239120?style=flat-square&logo=html5&logoColor=white',
  'https://img.shields.io/badge/CSS-239120?&style=flat-square&logo=css3&logoColor=white',
  'https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript',
  'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white',
  'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white',
  'https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java',
  'https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white',
  'https://img.shields.io/badge/TypeScript-007ACC?style=style=flat-square&logo=typescript&logoColor=white',
  'https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white',
  'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB',
  'https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB',
  'https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white',
  'https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white',
  'https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&logo=material-ui&logoColor=white',
  'https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white',
  'https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white',
  'https://img.shields.io/badge/Amazon_AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white',
  'https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white',
  'https://img.shields.io/badge/Express.js-404D59?style=flat-square',
]

function Skills() {
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
        paddingBottom: '25vh',
      }}>
      <div>
        {' '}
        <h1 className="font-face-bs dark-text " style={{}}>
          SKILLS
        </h1>
      </div>

      <div
        style={{
          display: ' flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: '80vw',
          flex: 1,
          flexWrap: 'wrap',
          // justifyContent: 'space-between',
        }}>
        {' '}
        {imgArr.map(el => {
          return <img src={el} key={el + '_/key'} style={{ marginLeft: 5, marginTop: 5 }}></img>
        })}
      </div>
    </div>
  )
}

export default Skills
