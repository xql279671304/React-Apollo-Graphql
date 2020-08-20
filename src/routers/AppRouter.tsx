import React from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

/**
 * Using `XXX_PAGE_URL` path constants:
 * Pros: get rid of the fragile string literals
 * Cons: TODO: summarize all the path consts into a single file to avoid circular dependency & good for split chunks + lazy load
 */
// import { Management, HOME_PAGE_URL } from '../pages'
import { Login, Login_PAGE_URL } from '../pages/Login'
import MainFrame from '../components/MainFrame'
import { Home, Home_PAGE_URL } from '../pages/Home'

export function AppRouter() {
  const { i18n } = useTranslation()
  /**
   * Benefits of `basename`:
   * 1. <Link /> component auto-prefixed
   * 2. `history.[push|replace]` auto-prefixed
   *
   * TODO: how to handle `/`? Redirect?
   */
  const basename = `/${i18n.language}`

  return (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route exact path={Login_PAGE_URL} component={Login} />
        <MainFrame>
          <Route path={Home_PAGE_URL} component={Home}></Route>
        </MainFrame>
        <Redirect to={Login_PAGE_URL} />
      </Switch>
    </BrowserRouter>
  )
}
