import React from 'react'
import cloneMe from '../../image/clone-me.PNG'
import cloneVa from '../../image/clone-va.PNG'
import { NavLink } from 'react-router-dom'
import './projects.css'

function UIShowcase() {
  return (
    <div className="projects_container">
      <div className="projects_route_items">
        <NavLink to="/projects" >Web App</NavLink>
        <NavLink to="/projects/uishowcase"  activeStyle={{ fontWeight: "bold", color: "lightcyan" }}>UI</NavLink>
      </div>

      <div className="ui_container">
        <div className="ui_items">
          <h1>Medium-clone</h1>
          <img src={ cloneMe } alt={ cloneMe }/>
          <p>This design is from Medium. There is desktop version and moblies</p>
          <p>Tool: Figma</p>
          <div>
            <a href="https://www.figma.com/file/fAkCIvcGJap1aH9c4cufBY/clone-medium?node-id=1%3A202" rel="noopener noreferrer" target="_blank">
              <button>LIVE</button>
            </a>
          </div>
        </div>

        <div className="ui_items">
          <h1>Val-clone</h1>
          <img src={ cloneVa } alt={ cloneVa }/>
          <p>Clone Val</p>
          <p>Tool: Figma</p>
          <div>
            <a href="https://www.figma.com/file/nB7Xm8oZC6wDTLSgw4V73A/clone-blog?node-id=0%3A1" rel="noopener noreferrer" target="_blank">
              <button>LIVE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UIShowcase