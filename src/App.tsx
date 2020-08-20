import 'reflect-metadata' // required by class-validator family
import React from 'react'
import './App.css'
import { AppRouter } from './routers/AppRouter'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import themeMemo from './styles/themeMemo'

function App() {
  return (
    <ThemeProvider theme={themeMemo()}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
