import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      margin: theme.spacing(0),
      width: '300px'
    },
    default: {},
    primary: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      }
    }
  })
)

interface Props {
  open: boolean,
  handleClose: Function,
  handleSure: Function,
  contentText?: string
}

export default function DeleteConfirm (props: Props) {
  const classes = useStyles()
  return (
    <Dialog open={props.open} aria-labelledby="delete-dialog-title" maxWidth="lg">
      <DialogContent className={classes.content}>
      <p>{props.contentText||'确定删除该数据？'}</p>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" size="small" onClick={() => {
          props.handleClose()
        }}>取 消</Button>
        <Button variant="outlined" size="small" color="primary" onClick={() => {
          props.handleSure()
        }}>确 定</Button>
      </DialogActions>
    </Dialog>
  )
}