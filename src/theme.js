import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#93e9be"
    },
    secondary: {
      main: "#fa8072"
    },
    background: {
      paper: "#eee"
    }
  }
});

export default theme;