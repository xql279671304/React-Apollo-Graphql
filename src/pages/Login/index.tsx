import React from 'react'
import {
  Box,
  Card,
  Divider,
  Button,
  CardHeader,
  CardContent,
  TextField,
  Snackbar
} from '@material-ui/core'
import { keyPathMirror } from 'key-path-mirror'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useLazyQuery } from '@apollo/react-hooks'
import { useTranslation } from 'react-i18next'
import { I18N, I18N_NS } from '../_i18n'
import Language from '../../components/Language'
import { useHistory } from 'react-router-dom'
import { LOGIN_DATA, GET_LOGIN } from './gqls'
import Loading from '../../components/Loading'
import { useFormValidation } from '../../utils/formValidation/useFormValidation'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      '& .box': {
        position: 'relative'
      }
    },
    card: {
      width: '400px'
    },
    cardContent: {
      display: 'flex',
      flexFlow: 'column'
    },
    title: {
      color: '#fff',
      backgroundColor: theme.palette.text.secondary
    },
    form: {
      display: 'flex',
      flexFlow: 'column',
      '& .textField': {
        marginBottom: '10px'
      }
    },
    top: {
      position: 'absolute',
      right: '0.5rem',
      top: '-0.2rem',
      '& button': {
        color: '#ffffff',
        '& .text': {
          borderColor: '#ffffff'
        }
      }
    }
  })
)

export function Login() {
  const classes = useStyles()
  const { t } = useTranslation(I18N_NS)
  const history = useHistory()
  const formInitData = new LOGIN_DATA()
  const fields = keyPathMirror(formInitData)
  const [formData, setFormData] = React.useState<LOGIN_DATA>(formInitData)
  const { validateFormSync, getFieldValidationProps } = useFormValidation(LOGIN_DATA)
  const [alertState, setAlertState] = React.useState({
    open: false,
    message: ''
  })
  
  const [getLogin, { loading: loginLoading, data: loginInfo }] = useLazyQuery(GET_LOGIN)

  if (loginInfo) {
    history.push('/')
  }

  const handleAlertClose = () => {
    setAlertState({ open: false, message: '' })
  }

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const key = evt.target.id
    let value: string
    value = evt.target.value
    setFormData({ ...formData, [key]: value })
  }

  const submitLogin = () => {
    if (!validateFormSync(formData)) return false
    getLogin({
      variables: formData
    })
  }

  return (
    <div className={classes.root}>

      <Loading isShow={Boolean(loginLoading)}></Loading>

      <Snackbar open={alertState.open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000} onClose={handleAlertClose} message={alertState.message}></Snackbar>

      <Box display="flex" className="box" flexDirection="row-reverse">
        <Card className={classes.card}>
          <Language className={classes.top}></Language>

          <CardHeader title={t(I18N.login.header_title)} className={classes.title}></CardHeader>

          <CardContent className={classes.cardContent}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                className="textField"
                variant="outlined"
                id={fields.account}
                label={t(I18N.login.user_name)}
                value={formData.account||''}
                onChange={handleInput}
                {...getFieldValidationProps(fields.account)}
              />
              <TextField
                className="textField"
                variant="outlined"
                id={fields.password}
                label={t(I18N.login.user_password)}
                type="password"
                value={formData.password||''}
                onChange={handleInput}
                {...getFieldValidationProps(fields.password)}
              />
            </form>
            <Divider variant="inset" />
            <Button variant="contained" color="primary" onClick={() => {
              submitLogin()
            }} >
              {t(I18N.login.submit_btn)}
            </Button>
          </CardContent>

        </Card>
      </Box>
    </div>
  )
}

export const Login_PAGE_URL = '/login'
