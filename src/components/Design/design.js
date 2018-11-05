import React from "react"
import {Link} from "react-router-dom"
import "../Tech/tech.css"


const casesJson = require("../../cases.json")


class Design extends React.Component {

    render() {
      return (
        <div className="techContainer">
            <div nameClass="techheader">
            <h4>DESIGN & ILLUSTRATIONS</h4>
          </div>
          <div className="techText">
            <p>Illustrations, digital design done as a freelancer and as a student at Hyper Island</p>
          </div>
          <div className = "allCases">
            <div className = "casesContainer">
            {casesJson.designCases.map((item) => {
              return (
                <div className = "case" >
                  <Link to ={`/designCases/${item.id}`}>
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

    export default Design
