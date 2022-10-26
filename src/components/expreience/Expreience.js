import React from 'react'
import './expreience.css'

function Expreience() {
  return (
    <div className="exprience_container">
      <h1>EXPERIENCE</h1>
      <div className="exprience_items">
        <div className="exprience_row">
         <div>
          <h2>Software Engineer</h2>
          <h3>Dun & Bradsteet (Austin)</h3>
         </div>
         <p>Dec 2021 - Oct 2022</p>
        </div>
      </div>
      
      <div className="exprience_items">
        <div className="exprience_row">
         <div>
          <h2>Software Engineer (React/Vue)</h2>
          <h3>Travis Central Appraisal District (Austin)</h3>
         </div>
         <p>April 2019 - Dec 2021</p>
        </div>
        <ol>
          <li>• I've built and actively maintain a full-stack JavaScript web application platform that serves up with SPA with React/Vue for front-end. Node.js + SQL for back-end.</li>
          <li>• Design UI useing Figma</li>
          <li>• Add unit testing and integration testing included Jest, Mocha, Cypress</li>
        </ol>
      </div>

      <div className="exprience_items">
        <div className="exprience_row">
          <div>
            <h2>FRONT END ENGINEER</h2>
            <h3>DevMountain (Dallas)</h3>
          </div>
          <p>Aug 2018 - Feb 2019</p>
        </div>
        <ol>
          <li>• Full stack app about Cryto Price real-time Database included D3 Chart model for visualization</li>
          <li>• Tested both Frontend JS applications with Jest, Enzyme, Mocha, and Cypress</li>
          <li>• Built various back-end REST API's backed by PostgreSQL</li>
          <li>• Use of React, and Redux to manage data flow</li>
        </ol>
      </div>

      <div className="exprience_items">
        <div className="exprience_row">
         <div>
          <h2>IT Helpdesk Analyst</h2>
          <h3>Samsung Austin Semiconductor (Austin)</h3>
         </div>
         <p>May 2014 - Jan 2018</p>
        </div>
        <ol>
          <li>• IT support ticketing system experience</li>
          <li>• Comprehension of networking concepts</li>
          <li>• Provide IT assistance for operating systems, productivity software, and a variety of other software applications used internally</li>
        </ol>
      </div>
    </div>
  )
}

export default Expreience
