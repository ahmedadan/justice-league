import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#698D8E",
      dark: "#385D5F",
      light: "#95B2B3",
    },
    secondary: {
      main: "#C4C3F3",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 400,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
        },
      },
    },
    MuiGrid: {
      container: {
        margin: "0px 300px !important",
        width: "unset !important",
      },
    },
  },
});

export default theme;
