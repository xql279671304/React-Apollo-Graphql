import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

interface Props {
  count: number,
  perPage: number,
  page: number,
  handelPage: any
}

export default function BasicPagination(props: Props) {
  const classes = useStyles();
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    setCount(Math.ceil(props.count / props.perPage))
  }, [props.count, props.perPage])
  
  return (
    <div className={classes.root}>
      <Pagination onChange={props.handelPage} count={count} page={props.page} color="standard" />
    </div>
  );
}
