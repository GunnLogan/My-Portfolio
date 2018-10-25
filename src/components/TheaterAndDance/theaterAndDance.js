import React from "react"
import {Link} from "react-router-dom"
import "../Tech/tech.css"


const casesJson = require("../../cases.json")


class TheaterAndDance extends React.Component {

    render() {
      return (
        <div className="techContainer">
            <div nameClass="techheader">
            <h4>THEATER & DANCE</h4>
          </div>
          <div className="techText">
            <p>20 years of experience working as a professional dancer with The Royal Swedish Ballet, Geneva Ballet, Icelandic Dance Company and National Ballet of Canada.
               Choreographies for The Royal Opera House in Stockholm, Icelandic Dance Company, Orion Theater and the Royal Dramatic Theater </p>
          </div>
          <div className = "allCases">
            <div className = "casesContainer">
            {casesJson.cases.map((item) => {
              return (
                <div className = "case" >
                  <Link to ={`/danceCases/${item.id}`}>
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
