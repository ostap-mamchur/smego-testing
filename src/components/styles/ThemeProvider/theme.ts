import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2B64F5"
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(',')
  },
})

export { theme };