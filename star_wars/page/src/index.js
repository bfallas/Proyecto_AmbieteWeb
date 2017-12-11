import React from 'react'
import ReactDOM from 'react-dom'
// --------------
import BodyComp from './comps/01-Body.jsx'

const MainComp = ()=>{
  return(
    <div>
      <BodyComp/>
    </div>
  )
}

ReactDOM.render(<MainComp/>, document.getElementById("root"))
