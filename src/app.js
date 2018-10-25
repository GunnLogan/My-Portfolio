import React from "react"
import { HashRouter as Router, Route, Link,} from "react-router-dom"
import LandingPage from "./pages/landing-page/landingPage"
import Cases from "./pages/cases/cases"
import "./index.css"

import Button from "./components/button/button"
class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path= "/" exact component = {LandingPage}/>
          <Route path= "/cases/:id" component = {Cases}/>
          <Route path= "/theateranddancecases/:id" component = {Cases}/>

        </div>
      </Router>
    )
  }

}

export default App
