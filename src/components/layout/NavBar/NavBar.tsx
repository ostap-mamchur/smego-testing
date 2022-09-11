import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Logo } from "../../logo/Logo/Logo";
import { StyledNavBar } from "./NavBar.style";

export const NavBar: React.FC = () => {
  return (
    <StyledNavBar position="static">
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={6} sm={6} md={3}>
          <Logo />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Typography variant="h5" component="h1">Application</Typography>
        </Grid>
      </Grid>
    </StyledNavBar>
  );
};
