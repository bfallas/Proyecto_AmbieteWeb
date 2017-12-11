import React from 'react'
import { Link } from 'react-router-dom'



export default class extends React.Component {
  state = { show: false, keys: [], data: {} }



  exe1 = async ()=>{
    this.setState({ show: false })
    const arr = []
    let address = this.props.match.params.id.replace(/-/g, "/")
    const info = await fetch(address, {method: "GET"})
    const results = await info.json()
    await Object.keys(results).forEach( (key)=>{ arr.push(key) } )
    await this.setState({ data: results })
    await this.setState({ keys: arr })
    await this.setState({ show: true })
  }



  exe2 = ()=>{
    return( <div> {
          this.state.keys.map((x) => { return(
            <div key={x} ><strong>{x} :</strong> {this.state.data[x]}</div>
          ) })
        } </div> )
  }


  render() {
    const dataSty = { fontSize: "20px", margin: "20px auto", display: "block", border: "2px solid trasparent", padding: "15px", textAlign: "left", width: "75%", backgroundColor: "#282727", color: "#FFF" }
    const bk2srch = { padding: "8px", border: "2px solid white", backgroundColor: "rgb(187, 251, 255)" }
    const hrstyle = { width: "75%" }
    const btn2lod = { padding: "4px", border: "2px solid white" }
    return(
      <div>
        <div><Link style={bk2srch} to="/"><strong>Back to Search</strong></Link></div>
        <br/>
        <hr style={hrstyle} />
        <h3>INFORMATION:</h3>
        <button style={btn2lod} onClick={() => this.exe1("people/")} >Load Info</button>
        <div style={dataSty}>{ this.state.show ? React.createElement(this.exe2) : <div>Click button to load info..</div> }</div>
      </div>
    )
  }
}
