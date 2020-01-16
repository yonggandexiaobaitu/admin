import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'

/*
应用的根组件
 */
export default class App extends Component {


  render () {
    return (
      <BrowserRouter>
        <Switch> {/*只匹配其中一个*/}
          <Route path='/' component={Login}></Route>
          
        </Switch>
      </BrowserRouter>
    )
  }
}