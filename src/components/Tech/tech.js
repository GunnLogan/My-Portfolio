import React from "react"
import "./tech.css"

class Tech extends React.Component {

  render() {
    return (
      <div className="techContainer">
        <div nameClass="techheader">
          <h4>TECH</h4>
        </div>
        <div className="techText">
          <p>480 coding hours, 50+ individual tasks, HTML5, CSS, SASS
          Flexbox, Javascript, ES6, JSX, React, Node.js, Mongo DB,
          API;s, 6 sprints with demos together with companies like
          Volumental, Bonnier, Comprend, Svenska Spel @ technigo
          Exploring generative art</p>
        </div>
        <div className="allProjects">
          <div className="projectsContainer1">
            <div className="project"><p>hello</p><img src="/images/bauerVolumental.png" /></div>
            <div className="project"><p>hello</p><img src="/images/bauerVolumental.png" /></div>
          </div>
          <div className="projectsContainer2">
            <div className="project"><p>One-pager in HTML and CSS3 using flexbox. Client Volumental</p><img src="/images/bauerVolumental.png" /></div>
            <div className="project"><p>Space news site built with Google News API. Client Bonnier News</p><img src="/images/bauerVolumental.png" /></div>
          </div>
          <div className="projectsContainer3">
            <div className="project"><p>hello</p><img src="/images/bauerVolumental.png" /></div>
            <div className="project"><p>hello</p><img src="/images/bauerVolumental.png" /></div>
          </div>
        </div>
      </div>
    )
  }

}

export default Tech
