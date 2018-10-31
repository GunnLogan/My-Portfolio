import React from "react"
import "./aboutMe.css"
class AboutMe extends React.Component {

  render() {
    return (

      <div className = "aboutMeContainer">
        <div className = "textAndImage">
          <div className = "imageContainer"> <img src = "./images/myPhoto.jpg"/></div>
          <div className = "aboutMeText" >
            
            <h5> FRONTEND DEVELOPER <br/>+DIGITAL CREATIVE</h5>
            <p> Hello I´ m a front end developer, a digital creative, designer, illustrator and choreographer. < br / > My passion is weaving concept, code, and craft into a unified whole.</p>
            <a href = "https://github.com/GunnLogan" class="Button">GITHUB</a>
          </div>
        </div>
      </div>

    )
  }

}

export default AboutMe
