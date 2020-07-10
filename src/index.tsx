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
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const uri = process.env.REACT_APP_API_BASE_URL
const client = new ApolloClient({
	link: ApolloLink.from([
		// error log middleware
		onError(({ graphQLErrors, networkError = {} as any }) => {
			if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
          toast.error(message)
          return false
        })
      }
			if (networkError) {
        const href = window.location.href
        if (networkError.statusCode === 401 && !href.includes('/login')) {
          window.location.href = '/login'
        }
        const text = networkError?.bodyText ?? ''
        if (text) {
          toast.error(networkError?.bodyText??'')
        }
      }
		}),
		createHttpLink({
			uri,
			credentials: 'include',
		}),
  ]),
  cache: new InMemoryCache()
});

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
