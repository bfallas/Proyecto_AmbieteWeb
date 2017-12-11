import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './02-Categories.jsx'
import UniPage from './04-UniPage.jsx'
import Logo from './img/imagen.jpg'

export default class extends Component {
  render() {

    return(
      <div id="MainSty">
        <img id="PicSty" src={Logo} alt="miss pic"/>
        <h1>Star Wars Browser</h1>

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
