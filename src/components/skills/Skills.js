import React from 'react'
import './skills.css'

function Skills() {
  return (
    <div className="outer">
      <div className="skills_container">
        <h1>SKILLS</h1>
        <h3>PROGRAMMING LANGUAGES & TOOLS</h3>
        <div className="skills_items">
          <i class="fab fa-js">JavaScript</i>
          <i class="fab fa-html5">HTML5</i>
          <i class="fab fa-node">Node.js</i>
          <i class="fab fa-react">React</i>
          <i class="fab fa-vuejs">Vue</i>
          <i class="fas fa-database">Postgresql</i>
          <i class="fab fa-sass">SASS</i>
          <i class="fab fa-npm">NPM</i>
          <i class="fab fa-aws">AWS</i>
          <i class="fab fa-github-square">GIT</i>
          <i class="fab fa-bootstrap">Bootstrap</i>
          <i class="fab fa-bitcoin">Blockchain</i>
        </div>
        <h3>WORKFLOW</h3>
        <ol>
          <li>Mobile-First, Responsive Design</li> 
          <li>Cross Browser Testing & Debugging</li>
          <li>Cross Functional Teams</li>
          <li>Agile Development & Scrum</li>
        </ol>
      </div>
    </div>
  )
}

export default Skills