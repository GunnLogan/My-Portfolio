import React from "react"
import {Link} from "react-router-dom"
import "./theaterAndDance.css"


const theAndDancasesJson = require("../../theAndDancases.json")


class TheaterAndDance extends React.Component {

    render() {
      return (
        <div className="theaterAndDanceContainer">
            <div nameClass="theaterAndDanceheader">
            <h4>Theater & Dance</h4>
          </div>
          <div className="theaterAndDanceText">
            <p>20 years of experience working as a professional dancer with The Royal Swedish Ballet, Geneva Ballet, Icelandic Dance Company and National Ballet of Canada.
               Choreographies for The Royal Opera House in Stockholm, Icelandic Dance Company, Orion Theater and the Royal Dramatic Theater </p>
          </div>
          <div className = "alltheAndDanCases">
            <div className = "theAndDancasesContainer">
            {theAndDanCaseJson.cases.map((item) => {
                return (
                  <div className = "theAndDancase" >
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

    export default TheaterAndDance
