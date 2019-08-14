import React from 'react'
import './about.css'

function About() {
  return (
    <div className="about_container">
      <div className="about_item">
        <h1>Vu <span>Tran</span></h1>
        <p>I'm Front End Engineer with a love for all things code and a desire to continue learning and growing. I spend most of my time coding Web applications. My passionate is problem solving, creativity, and hands-on engineering. Also is going to coding meetups and discussing progressive technologies.</p>
        <p>Phone: 512-919-9090  · <a href="mailto:vutran6853@gmail.com">vutran6853@gmail.com</a></p>
        <div className="link_to_site">
          <a href="https://www.linkedin.com/in/vu-tran6853/" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/vutran6853" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:vutran6853@gmail.com">
            <i class="fas fa-at"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About