import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './02-Categories.jsx'
import UniPage from './04-UniPage.jsx'
import Logo from './img/imagen.jpg'

export default class extends Component {
  render() {
    const MainSty = { textAlign: "center", color: "white", height: "100vh" }
    const PicSty ={ paddingTop: "5px", width: "100%", height: "300px"}
    return(
      <div style={MainSty}>
        <img style={PicSty} src={Logo} alt="miss pic"/>
        <h1>StarWars Info.</h1>

          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Categories}/>
                <Route path="/:id" component={UniPage} />
              </Switch>
            </div>
          </Router>


      </div>
    )
  }
}
