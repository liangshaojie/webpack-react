import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { AppState } from "../../store/app-state";
import Button from 'material-ui/Button'
import Container from '../layout/content.jsx'

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
      <Container>
        <Helmet>
          <title>this is toplist</title>
          <meta name="deacription" content="this is description" />
        </Helmet>
        <Button raised color="primary">this is a button</Button>
        <input type="text" onChange={this.changeName}/>
        <span>{this.props.appState.msg}</span>
      </Container>
    )
  }
}

TopicList.PropTypes = {
  appState: PropTypes.instanceOf(AppState)
}
