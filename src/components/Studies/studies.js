import React from "react"
import "./studies.css"
class Studies extends React.Component {

  render() {
    return (
      <div className="studies">
        <h3>Studies</h3>
        <div className="studiesContainer">
          <div className="studiesBox">
            <h6>Frontend <br/>Development</h6>
            <p></p>
          </div>
        <div className="studiesBox">
          <h6>Hyper Island</h6>
          <p>Sprints with <br/>companies and<br/> courses in UX,<br/> branding,<br/>facilitation<br/>team developemnt<br/>and experience design</p>
        </div>
        <div className="studiesBox">
          <h6>Dance and theater</h6>
          <p>10 years of <br/>Classical ballet<br/>training,<br/>modern dance<br/> and improvisation,<br/>as well as </p>
        </div>
        </div>
        <div>
          <div className="more">
            <h6>more</h6>
            <p>...</p>
        </div>
      </div>
      <div className="buttonBox">
        <a href="#" class="Button">See my linkedin</a>
      </div>
      </div>
    )
  }

}

export default Studies
