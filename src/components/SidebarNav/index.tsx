import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTopNavType } from '../../service/topNav.service'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '6rem',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 99
    },
    content: {
      // marginTop: theme.spacing(10)
    },
    item: {
      display: 'block',
      padding: theme.spacing(4, 0, 0),
      cursor: 'pointer'
    },
    img: {
      display: 'block',
      width: '4rem',
      margin: 'auto',
      background: '#fff',
      borderRadius: '6px'
    },
    logo: {
      display: 'block',
      padding: theme.spacing(1, 0)
    }
  })
)

const SidebarNav = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const icon2 = require('./icon-2.png')
  const icon3 = require('./icon-3.png')
  const logo = require('./logo512.png')

  const setNavTop = (type: string) => {
    dispatch(setTopNavType(type))
  }

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img className={classes.img} src={logo} alt="" title=""/>
      </div>
      <div className={classes.content}>
        <Link to="/" className={classes.item} onClick={() => setNavTop('MEMBER')}>
          <img className={classes.img} src={icon2} alt="" title=""/>
        </Link>
        <Link to="/" className={classes.item} onClick={() => setNavTop('TRANSACTION')}>
          <img className={classes.img} src={icon3} alt="" title=""/>
        </Link>
      </div>
    </div>
  )
}

export default SidebarNav;
