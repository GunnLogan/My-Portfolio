import React from "react"
import "./tech.css"
import {
  Link
} from "react-router-dom"
import "./tech.css"

const casesJson = require("../../cases.json")


class Tech extends React.Component {

    render() {
      return (
        <div className="techContainer">
            <div nameClass="techheader">
            <h4>TECH</h4>
          </div>
          <div className="techText">
            <p>480 coding hours, 50 + individual tasks, HTML5, CSS, SASS Flexbox, Javascript, ES6, JSX, React, Node.js, Mongo DB,
            API; s, 6 sprints with demos together with companies like Volumental, Bonnier, Comprend, Svenska Spel @ technigo.Exploring generative art </p>
          </div>
          <div className = "allCases">
            <div className = "casesContainer">
            {casesJson.cases.map((item) => {
                return (
                  <div className = "case" >
                    <Link to ={`/cases/${item.id}`}>
                      <img src={item.image}/>
                    </Link ><p>{item.description}</p>
                  </div>)
                })
            }

            </div>
          </div>
        </div>


        )
      }

    }

    export default Tech
