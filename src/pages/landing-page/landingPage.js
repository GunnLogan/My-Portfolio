import React from "react"
import "./landingPage.css"
import AboutMe from "../../components/About-Me/aboutMe"
import Header from "../../components/header/header"
import Tech from "../../components/Tech/tech"
import Skills from "../../components/Skills/skills"
import Studies from "../../components/Studies/studies"

class LandingPage extends React.Component {

  render() {
    return (
      <div className="landingPage">
        <AboutMe />
        <Tech />
        <Skills />
        <Studies />

      </div>
    )
  }

}

export default LandingPage
