import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function ControlledAccordions({ projects }) {
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    console.log('expanded', expanded)
  }
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <Accordion
            style={{ backgroundColor: `${project.bgcolor}`, borderRadius: 5, margin: 5 }}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography style={{ color: '#17202A', fontSize: 20, opacity: 1 }}>{project.name}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: 'rgb(71, 1, 19  , 1)' }}>
              {project.imageLink ? (
                <>
                  <img src={project.imageLink} width="250" height="250" key="imglink" alt=""></img>
                </>
              ) : null}
              <Typography style={{ color: '#fff', fontSize: 14, opacity: 1 }}>{project.description}</Typography>
              <br />
              <Typography style={{ color: '#fff', fontSize: 15, opacity: 1, fontWeight: 500, marginBottom: 10 }}>
                {project.tech}
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {project.deployLink ? (
                  <>
                    <a
                      href={project.deployLink}
                      style={{ fontSize: 15, color: '#fff' }}
                      target="_blank"
                      rel="noopener noreferrer">
                      {project.deployLink}
                    </a>
                  </>
                ) : null}
                {project.github ? (
                  <>
                    {' '}
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github"
                        key={`github_link_${index}`}
                        alt=""></img>
                    </a>
                  </>
                ) : null}
              </div>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
