import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 99,
      backgroundColor: theme.palette.text.disabled,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
)

interface Props {
  isShow: Boolean
}

export default function Loading(props: Props) {
  const classes = useStyles()
  return (
    props.isShow ?
    <div className={classes.root}>
      <CircularProgress></CircularProgress>
    </div>
    :
    <div></div>
  )
}
