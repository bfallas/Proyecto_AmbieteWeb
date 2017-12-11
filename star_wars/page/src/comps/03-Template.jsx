import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render() {

   
   return(
     <div class="boxInfo">
       <div><strong>Name: </strong>{this.props.name}</div>
       <div><strong>URL: </strong>{this.props.loc}</div>
       <div><strong>More Info: </strong><Link to={"/" + this.props.loc}>LINK</Link></div>
     </div>
   )
 }
}
