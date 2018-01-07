import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom' //eslint-disable-line
import {Provider} from 'mobx-react'
import App from './views/App'
import {AppContainer} from "react-hot-loader" //eslint-disable-line
import AppState from './store/app-state'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {lightBlue, pink} from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    accent: lightBlue,
    type: 'light'
  }
})

// ReactDOM.hydrate(<App />,document.getElementById('root'));
const initialState = window.__INITIAL__STATE__ || {}
const createApp = (TheApp) => {
  class Main extends React.Component {
    componentDidMount() {
      const jssStyles = document.getElementById('jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }
    render() {
      return <TheApp />
    }
  }

  return Main
}



const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <Component/>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(createApp(App))

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = requirt('./views/App').default //eslint-disable-line
    render(createApp(NextApp))
    // ReactDOM.hydrate(<NextApp />,document.getElementById('root'));
  })
}
