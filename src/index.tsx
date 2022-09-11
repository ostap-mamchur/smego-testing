import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { GlobalStyles } from "./components/styles/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "./components/styles/ThemeProvider/ThemeProvider";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <CssBaseline />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>
);
