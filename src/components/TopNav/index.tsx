import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { I18N, I18N_NS } from '../../pages/_i18n'
import Language from '../Language'
import { Login_PAGE_URL } from '../../pages/Login'
import { useSelector } from 'react-redux'
import { selectTopNav } from '../../service/topNav.service'
import { State } from '../../app/slices/topNav'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      left: 0,
      top: 0,
      height: '5rem',
      position: 'fixed',
      boxShadow: '0 0 4px -2px #000',
      backgroundColor: '#fff',
      zIndex: 98
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(10),
      height: '5rem',
      '& .title': {
        padding: theme.spacing(0, 6, 0),
        fontSize: '2rem',
        fontWeight: 'bold'
      },
      '& .item': {
        padding: theme.spacing(0, 6, 0),
        color: theme.palette.text.primary,
        fontSize: '1rem',
        textDecoration: 'none'
      }
    },
    logout: {
      position: 'absolute',
      right: '2rem',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.secondary.main
      }
    }
  })
)

const getLogout = () => {
  window.location.href = Login_PAGE_URL
}

const TopNav = () => {
  const classes = useStyles()
  const { t } = useTranslation(I18N_NS)
  let data: State = useSelector(selectTopNav)
  const dealData = (data: State) => {
    if (data.type === 'MEMBER') {
      return (
        <>
          <Link to="/" className="item">
            <p>{t(I18N.top_nav.summary.text)}</p>
          </Link>
          <Link to="/" className="item">
            <p>{t(I18N.top_nav.users.text)}</p>
          </Link>
        </>
      )
    } else {
      return (
        <Link to="/" className="item">
          <p>{t(I18N.top_nav.orders.text)}</p>
        </Link>
      )
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>

        <div className="title">
          {t(I18N.top_nav.title)}
        </div>

        { dealData(data) }

        <Language></Language>

        <div className={classes.logout} onClick={getLogout}>{t(I18N.top_nav.exit)}</div>

      </div>
    </div>
  )
}

export default TopNav;
