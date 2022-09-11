import MuiGlobalStyles from "@mui/material/GlobalStyles";

export const GlobalStyles: React.FC = () => {
  return (
    <MuiGlobalStyles
      styles={{ "html, body, #root, .App": { height: "100%" } }}
    />
  );
};
