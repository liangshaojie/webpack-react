import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { AppState } from "../../store/app-state";
import App from "../App";

@inject('appState') @observer
export default class TopicList extends React.Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }


  componentDidMount() {
    // do something here
  }

  asyncBootstrap(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        this.props.appState.count = 3
        resolve(true)
      },200)
    })
  }

  changeName(event){
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>this is toplist</title>
          <meta name="deacription" content="this is description" />
        </Helmet>
        <input type="text" onChange={this.changeName}/>
        <span>{this.props.appState.msg}</span>
      </div>
    )
  }
}

TopicList.PropTypes = {
  appState: PropTypes.instanceOf(AppState)
}
