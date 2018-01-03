import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import TopicList from '../views/topic-list'
import TopicDetail from '../views/topic-detail/index'
import TestApi from '../views/test/api-test'


export default () => [
  <Route path="/" render={() => <Redirect to="/list" key="first" />} exact />,
  <Route path="/list" component={TopicList} exact  key="list" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
  <Route path="/test" component={TestApi} key="test" />,
]
