import MuiButton, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material";

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightMedium,
  borderRadius: theme.spacing(3),
}));
