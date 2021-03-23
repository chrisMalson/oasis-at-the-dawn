import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      fontSizeLarge: { // for prev/next icons in mobile viewport
        fontSize: '3.25rem',
        color: '#fff',
      }
    }
  },
  palette: {
    primary: {
      main: "#93e9be", // seafoam green
      dark: '#066234'
    },
    secondary: {
      main: "#fa8072" // salmon pink
    },
    background: {
      paper: "#eee"
    }
  },
  typography: {
    button: {
      textTransform: 'none' // override default to uppercase in material-ui buttons
    },
    fontFamily: [
      'ABeeZee',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

export default theme;