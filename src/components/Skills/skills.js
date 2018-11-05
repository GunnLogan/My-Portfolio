import React from "react"
import "./skills.css"

class Skills extends React.Component {

  render() {
    return (
      <div className="skills">
        <h3>SKILLS</h3>
        <div className="skillsContainer">
          <div className="code">
            <h6>CODE</h6>
            <p>HTML<br/> CSS3<br/>Javascript ES6<br/>React<br/>SASS<br/>GitHub<br/>Node.js<br/></p>
          </div>
          <div className="toolbox">
            <h6>TOOLBOX</h6>
            <p>Atom<br/>Postman<br/>Javascript
                <br/>Adobe Illustrator<br/>Adobe Photoshop<br/>Sketch<br/>Procreate</p>
          </div>
          <div className="moreSkills">
            <h6>MORE</h6>
            <p>Design Lead<br/>Branding<br/>Dramaturgi<br/>Choreography
              <br/>Hyper Island Toolbox<br/>Facilitation<br/>Deviced theater</p>
          </div>
        </div>

      </div>


    )
  }

}

export default Skills
