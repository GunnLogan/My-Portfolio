import React from "react"
import "./cases.css"

const casesJson = require("../../cases.json")


class Cases extends React.Component {

    render() {
      const id = this.props.match.params.id
      const caseData = casesJson.cases[id-1]

      return (
      <div className="casePageBox">
         <h1>{caseData.header}</h1>
         <div className="imageBox">
           <img src={caseData.image}/>
         </div>
          <p>{caseData.description}</p>
         <div className="textBox">

           <div className="codeText">
             <h6>Code</h6>
             <p>{caseData.code}</p>
           </div>
           <div className="toolboxText">
             <h6>Toolbox</h6>
             <p>{caseData.toolbox}</p>
           </div>
           <div className="moreText">
             <h6>more</h6>
             <p>{caseData.more}</p>
           </div>
         </div>
         <div className="caseButton">
           <a href="#" class="Button">{caseData.seeItLive}</a>
         </div>
      </div>
     )
   }
  }


export default Cases
