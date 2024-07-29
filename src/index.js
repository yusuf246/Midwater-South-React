import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound1 from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={NotFound1} path="**" /> {/* Use NotFound1 here */}
        <Redirect to="/not-found" /> {/* Redirect to a known route */}
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
