import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {

   const myStl = { width: "75%", color: "black", textAlign: "left", padding: "12px 20px", border: "2px solid black", margin: "6px auto", display: "block" , backgroundColor: "rgb(249, 241, 175)" }
   return(
     <div style={myStl} >
       <div><strong>Name: </strong>{this.props.name}</div>
       <div><strong>URL: </strong>{this.props.loc}</div>
       <div><strong>More Info: </strong><Link to={"/" + this.props.loc}>LINK</Link></div>
     </div>
   )
 }
}
