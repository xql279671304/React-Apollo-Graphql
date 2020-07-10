import React from 'react'
import i18next from 'i18next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  MenuList,
  MenuItem,
  IconButton,
  Popper,
  Paper,
  ClickAwayListener
} from '@material-ui/core'
import { Lang, AVAILABLE_LANGS } from '../../i18n/consts'
import { setLang } from '../../i18n/utils'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      right: '6rem'
    },
    languageSelection: {
      '& .text': {
        width: '1.25rem',
        height: '1.25rem',
        border: `1px solid ${theme.palette.warning.contrastText}`,
        borderRadius: '0.625rem',
        fontSize: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      color: theme.palette.warning.contrastText,
      borderRadius: 8
    },
    popper: {
      zIndex: 99
    }
  })
)


const Language = function (props: any) {
  const classes = useStyles()
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const [isLangsMenuOpen, setLangsAnchorEl] = React.useState(false)

  const handleLangsMenuOpen = () => {
    setLangsAnchorEl(isLangsMenuOpen => !isLangsMenuOpen)
  }
  const handleLangsMenuClose = () => {
    setLangsAnchorEl(false)
  }
  const handleLanguageChange = (lang: Lang) => () => {
    setLang(lang)
    setLangsAnchorEl(false)
  }

  // return focus to the button when we transitioned from !isLangsMenuOpen -> isLangsMenuOpen
  const prevOpen = React.useRef(isLangsMenuOpen)
  React.useEffect(() => {
    if (prevOpen.current === true && isLangsMenuOpen === false) {
      anchorRef.current!.focus()
    }
    prevOpen.current = isLangsMenuOpen;
  }, [isLangsMenuOpen])

  return (
    <div className={props.className || classes.root}>
      <IconButton
        ref={anchorRef}
        edge="end"
        aria-label="account of current user"
        className={classes.languageSelection}
        onClick={handleLangsMenuOpen}>
        <div className="text">{i18next.language.toUpperCase()}</div>
      </IconButton>

      <Popper open={isLangsMenuOpen} className={classes.popper} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        <Paper>
          <ClickAwayListener onClickAway={handleLangsMenuClose}>
            <MenuList autoFocusItem={isLangsMenuOpen}>
              {AVAILABLE_LANGS.map(lang => (
                <MenuItem key={lang.value} onClick={handleLanguageChange(lang.value)}>
                  {lang.label}
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>

    </div>
  )
}

export default Language
