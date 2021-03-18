import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      fontSizeLarge: {
        fontSize: '3.25rem',
        color: '#fff',
      }
    }
  },
  palette: {
    primary: {
      main: "#93e9be",
      dark: '#066234'
    },
    secondary: {
      main: "#fa8072"
    },
    background: {
      paper: "#eee"
    }
  },
  typography: {
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