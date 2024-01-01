import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    background: {
      default: "#f0efed",
      white: "#ffffff",
      primary: "#28A19C",
    },
    primary: {
      main: "#28A19C",
    },
    secondary: {
      main: "#FFBA00",
    },
    neutral: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "40px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "12px",
      fontWeight: 600,
    },
    body2: {
      fontSize: "11px",
      fontWeight: 500,
    },
    footerTitle: {
      color: "#28A19C",
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "Quicksand",
    },
    footerItem: {
      color: "#343434",
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "Quicksand",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    allVariants: {
      fontFamily: "Quicksand",
    },
  },
});
