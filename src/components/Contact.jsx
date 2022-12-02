import React from 'react'
import pdf from '../assets/Resume - Jung Rae Jang.pdf'
function Contact() {
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
        <h1 className="font-face-bs dark-text" style={{ textShadow: '2px 1px 0px rgba(255,255,255,1)' }}>
          CONTACT
        </h1>
      </div>

      <div style={{ display: ' flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <a href="https://github.com/jungraejang" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            alt=""></img>
        </a>
        <a href="mailto:jungrae.jang@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
            alt=""></img>
        </a>
        <a href="https://www.linkedin.com/in/jung-rae-jang/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            alt=""></img>
        </a>
        <a href={pdf} download>
          <img src="https://img.shields.io/badge/pdf-PDF-red?style=for-the-badge" alt=""></img>
        </a>
      </div>
    </div>
  )
}

export default Contact
