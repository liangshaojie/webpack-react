import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {AppContainer} from "react-hot-loader" //eslint-disable-line

// ReactDOM.hydrate(<App />,document.getElementById('root'));
const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = requirt('./App.jsx').default //eslint-disable-line
    render(NextApp)
    // ReactDOM.hydrate(<NextApp />,document.getElementById('root'));
  })
}
