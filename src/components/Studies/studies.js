import React from "react"
import "./studies.css"
class Studies extends React.Component {

  render() {
    return (
      <div className="studies">
        <h3>STUDIES</h3>
        <div className="studiesContainer">
          <div className="studiesBox">
            <h6>TECHNIGO</h6>
            <p>Frontend <br/>Development<br/>Bootcamp<br/>Code Sprints</p>
          </div>
        <div className="studiesBox">
          <h6>HYPER ISLAND</h6>
          <p>Design Lead<br/>UGL Courses<br/>UX Sprint<br/>Branding Sprint<br/>Facilitation<br/>Team Development<br/>Experience design</p>
        </div>
        <div className="studiesBox">
          <h6>DANCE & THEATER</h6>
          <p>Dance education<br/>Ballet<br/>Modern dance<br/>Improvisation<br/>Gaga Technique<br/>Acting</p>
        </div>
        </div>
        <div>
          <div className="moreStudies">
            <h6>MORE</h6>
            <p>Internship at Norrsken House as a Designer working on UI design and Branding</p>
        </div>
      </div>
      <div className="buttonBox">
        <a href="https://www.linkedin.com/in/gunnlaugur-egilsson-23087869/" class="Button">LINKEDIN</a>
      </div>
      </div>
    )
  }

}

export default Studies
