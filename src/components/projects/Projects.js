import React from 'react'
import CRYPROMARKETS from '../../image/cryptoMarkets.PNG'
import kitnetyExchange1 from '../../image/kitnetyExchange1.PNG'
import socialDashboard from '../../image/socialDashboard.PNG'
import yelpclone1 from '../../image/yelpclone1.PNG'
import { NavLink } from 'react-router-dom'
import './projects.css'

function Projects() {
  return (
    <div className="projects_container">
      <div className="projects_route_items">
        <NavLink to="/projects"  activeStyle={{ fontWeight: "bold", color: "lightcyan" }}>Web App</NavLink>
        <NavLink to="/projects/uishowcase"  activeStyle={{ fontWeight: "bold", color: "yellow", backgroundColor: "blue" }}>UI</NavLink>
      </div>

      <div className="projects_items">
        <div>
          <h1>Crypto Markets</h1>
          <img src={ CRYPROMARKETS } alt={ CRYPROMARKETS }/>
          <p>Interactive, Responsive CryptoZone is the perfect place to learn about Crypto currencies and start to understand some of the fundamental concepts behind the blockchain.</p>
          <p><strong>TECH:</strong> React | Node | SCSS | POSTGREL | EXPRESS | BOOTSTRAP</p>
          <div>
            <a href="http://68.183.64.32:3001/#/" rel="noopener noreferrer" target="_blank">
              <button>LIVE</button>
            </a>
            <a href='https://github.com/vutran6853/Blockchain-News-Dashboardv2' rel="noopener noreferrer" target="_blank">
              <button>CODE</button>
            </a>
          </div>
        </div>

        <div>
          <h1>Social Chat</h1>
          <img src={ socialDashboard } alt={ socialDashboard }/>
          <p>This is a SocialMedia application that allows users to discover new friend, create new post, comment other people post.</p>
          <p><strong>TECH:</strong> React | Node | SCSS | POSTGREL | EXPRESS | BOOTSTRAP</p>
          <div>
            <a href="http://104.248.213.225:3006/" rel="noopener noreferrer" target="_blank">
              <button>LIVE</button>
            </a>
            <a href="https://github.com/vutran6853/socialchat" rel="noopener noreferrer" target="_blank">
              <button>CODE</button>
            </a>
          </div>
        </div>

        <div>
          <h1>Kitnety Exchange</h1>
          <img src={ kitnetyExchange1 } alt={ kitnetyExchange1 }/>
          <p>The Kitney Exchange addresses the lack of kidney transplants both the U.S and the world are facing. There are enough donor/recipient pairs in the country that can be matched and created into a donor chain, ultimately benefiting all participants. Kitney Exchange is a platform for recipient and donor pairs that would like to be matched with other incompatible pairs in their local area. We developed a system where multiple pairs can be matched in a chain.</p>
          <p><strong>TECH:</strong> React | Redux | PostgreSQL | Node | Rest API | Google Map | Nodemailer</p>
          <div>
            <a href="https://github.com/Kitney-Exchange" rel="noopener noreferrer" target="_blank">
              <button>CODE</button>
            </a>
          </div>
        </div>

        <div>
          <h1>Bestzap</h1>
          <img src={ yelpclone1 } alt={ yelpclone1 }/>
          <p>Best place to search your fav place for review & info.</p>
          <p><strong>TECH:</strong> React | Node | SCSS | REDUX | POSTGREL | EXPRESS | CSS</p>
          <div>
            <a href="http://104.248.213.225:3003/#/" rel="noopener noreferrer" target="_blank">
              <button>LIVE</button>
            </a>
            <a href="https://github.com/vutran6853/bestzap" rel="noopener noreferrer" target="_blank">
              <button>CODE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects