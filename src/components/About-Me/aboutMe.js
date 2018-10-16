import React from "react"
import "./aboutMe.css"
class AboutMe extends React.Component {

  render() {
    return (

      <div className="aboutMeContainer">

       <div className="textAndImage">
         <div className="imageContainer"><img src="/images/myPhoto.jpg" /></div>

          <div className="aboutMeText">
          <div className="name"><p>Gunnlaugur Egilsson</p></div>
          <h5>FRONTEND DEVELOPER <br />+ DIGITAL CREATIVE</h5>
          <p>Hello I´m a front end developer and a digital creative</p>
          <button><link/></button>
          </div>
        </div>
      </div>

    )
  }

}

export default AboutMe
