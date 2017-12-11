import React, { Component } from 'react'
import Template from './03-Template.jsx'
let myURL = "https://swapi.co/api/"



export default class extends Component {
  state = { data: [], show: false, catego: "" }



  myFun1 = async (sufix)=>{
    this.setState({ show: false })
    myURL = myURL + sufix
    const info = await fetch(myURL, {method: "GET"})
    const { results } = await info.json()
    await this.setState({ data: results })
    await this.setState({ catego: sufix })
    await this.setState({ show: true })
    myURL = "https://swapi.co/api/"
  }



  exe1 = () => {
    return( <div>
              <h2>{this.state.catego}</h2>

              {this.state.data.map((x)=>{
                let str = x.url.replace(/\//g, "-")
                return(
                  <Template key={x.name ? x.name : x.title} name={x.name ? x.name : x.title} loc={str} />
                )
              })}
            </div> )
  }



  render() {

    return(
      <div id="mainDiv">

        <button class="btnSty" onClick={() => this.myFun1("people/")} >People</button>
        <button class="btnSty" onClick={() => this.myFun1("planets/")} >Planets</button>
        <button class="btnSty" onClick={() => this.myFun1("films/")} >Films</button>
        <button class="btnSty" onClick={() => this.myFun1("species/")} >Species</button>
        <button class="btnSty" onClick={() => this.myFun1("vehicles/")} >Vehicles</button>
        <button class="btnSty" onClick={() => this.myFun1("starships/")} >Starships</button>

        <br/><br/>

        <div> { this.state.show ? React.createElement(this.exe1) : <div class="selection">One of them, you must choose</div> } </div>

      </div>
    )
  }
}
