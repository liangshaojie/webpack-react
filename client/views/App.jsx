import React from 'react'
import Routers from '../config/router'
import AppBar from './layout/app-bar'

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return [
      <AppBar />,
      <Routers key="routers" />,
    ]
  }
}
