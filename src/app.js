import React from "react"
import { BrowserRouter as Router, Route, Link, } from "react-router-dom"
import LandingPage from "./pages/landing-page/landingPage"
import CasePages from "./pages/case-pages/casePages"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>

         <Route path="/" exact component={LandingPage} />
         <Route path="/case" exact component={CasePages} />
         <Route path="/case/:id" component={CasePages} />

        </div>
      </Router>
    )
  }

}

export default App
