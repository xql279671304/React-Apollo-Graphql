import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import SidebarNav from '../SidebarNav'
import TopNav from '../TopNav'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10, 0, 0, 12)
    }
  })
)

const MainFrame = (props: any) => {
  const classes = useStyles()

  return (
    <Container maxWidth={false} className={classes.root}>
      <TopNav />
      <SidebarNav />
      {props.children}
    </Container>
  )
}

export default MainFrame;
