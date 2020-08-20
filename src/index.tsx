import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import * as serviceWorker from './serviceWorker'
import './assets/fonts/Lobster 1.4.otf'
import './i18n'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const uri = process.env.REACT_APP_API_BASE_URL
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <HelmetProvider>
          <App />
          <ToastContainer />
        </HelmetProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
