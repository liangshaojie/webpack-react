import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom' //eslint-disable-line
import App from './views/App'
import { AppContainer } from "react-hot-loader" //eslint-disable-line

// ReactDOM.hydrate(<App />,document.getElementById('root'));
const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = requirt('./views/App').default //eslint-disable-line
    render(NextApp)
    // ReactDOM.hydrate(<NextApp />,document.getElementById('root'));
  })
}
