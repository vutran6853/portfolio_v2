import React from 'react'
import './education.css'

function Education() {
  return (
    <div className="education_container">
      <h1>Education</h1>
      <div className="education_items">
        <div className="education_row">
          <div>
            <h2>University of Houston-Downtown</h2>
            <h3>Bachelor of Information Technology</h3>
          </div>
        </div>
      </div>

      <div className="education_items">
        <div className="education_row">
          <div>
            <h2>DevMountain</h2>
            <h3>Certifcate, Computer Software Engineering</h3>
          </div>
        </div>
      </div>

      <div className="education_items">
        <div className="education_row">
          <div>
            <h2>Austin Community College</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education