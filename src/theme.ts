import { createTheme, Theme as MaterialTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#377bff",
    },
    secondary: {
      main: "#4A4A4A",
      dark: "#595959",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.7rem",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
    },
  },
});

declare module "@emotion/react" {
  export interface Theme extends MaterialTheme {}
}

export default theme;
