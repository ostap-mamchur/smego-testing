import { styled } from "@mui/material";
import AppBar, { AppBarProps } from "@mui/material/AppBar";

export const StyledNavBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: "transparent",
  color: "black",
  boxShadow: "none",
  padding: `${theme.spacing(2)} 0`
}));
