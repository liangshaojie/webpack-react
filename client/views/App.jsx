import React from 'react'
import Routers from '../config/router'
import { Link } from 'react-router-dom' //eslint-disable-line

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return [
      <div key="banner">
        <Link to="/" >首页</Link>
        <br />
        <Link to="/detail" >详情页</Link>
      </div>,
      <Routers key="routers" />,
    ]
  }
}
