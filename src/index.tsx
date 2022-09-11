import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./components/styles/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "./components/styles/ThemeProvider/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider>
    <CssBaseline />
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
