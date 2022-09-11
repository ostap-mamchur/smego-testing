import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2B64F5"
    },
    background: {
      paper: "#ffffff",
      default: "#F2F2F2"
    },
    action: {
      active: "#7F7F7F",
      disabled: "#B2B2B2"
    }
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          fontWeight: theme.typography.fontWeightMedium,
          borderRadius: theme.spacing(3),
        })
      }
    },
  }
})

export { theme };