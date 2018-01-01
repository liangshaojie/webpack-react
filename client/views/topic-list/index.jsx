import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from "../../store/app.state";
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

  changeName(event){
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName}/>
        <span>{this.props.appState.msg}</span>
      </div>
    )
  }
}

TopicList.PropTypes = {
  appState: PropTypes.instanceOf(AppState)
}
