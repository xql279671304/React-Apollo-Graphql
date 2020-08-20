import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import createTheme from './createTheme'

export default () => {
  const isDarkModePrefered = useMediaQuery('(prefers-color-scheme: dark)')

  return React.useMemo(() => {
    return createTheme({
      appDrawer: { width: 20 },
      palette: {
        primary: {
          main: '#115293',
          light: '#4791db',
          dark: '#115293',
          contrastText: '#fff'
        },
        secondary: {
          light: '#be9c63',
          main: '#be9c63',
          dark: '#be9c63',
          contrastText: '#fff'
        },
        error: {
          main: '#ec1541'
        },
        background: {
          default: '#fafafa',
          paper: '#fff',
          footer: '#f2f2f2',
          designerHeaderLighter: '#978a80',
          designerHeaderDeeper: '#7b6e64'
        },
        divider: 'rgba(0, 0, 0, 0.12)',
        text: {
          primary: '#222222',
          secondary: '#222222',
          disabled: 'rgba(0, 0, 0, 0.38)'
        },
        action: {
          active: 'rgba(0, 0, 0, 0.54)',
          hover: 'rgba(0, 0, 0, 0.04)',
          selected: 'rgba(0, 0, 0, 0.08)'
        },
        // ... and we will overrides more default colors at here
        type: isDarkModePrefered ? 'light' : 'dark'
      },
      typography: {
        homeSectionTitle: {
          fontSize: '1.875rem',
          fontFamily: 'Georgia',
          fontWeight: 'bold',
          letterSpacing: 5,
          color: '#222'
        },
        homeSectionDescription: {
          fontSize: '1rem',
          fontFamily: 'Georgia',
          fontWeight: 'normal',
          letterSpacing: 1,
          color: '#222'
        },
        body1: {
          fontSize: '14px'
        },
        fontFamily: [
          'Montserrat',
          'Georgia',
          'Helvetica',
          'SeaweedScript',
          'Lobster 1.4',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'STSongti-SC',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(',')
      }
    })
  }, [isDarkModePrefered])
}
