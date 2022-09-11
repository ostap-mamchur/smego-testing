import { styled } from "@mui/material";
import Typography, { TypographyProps } from "@mui/material/Typography";

export const StyledForm = styled("form")(({ theme }) => ({
  padding: `0 ${theme.spacing(2)}`,
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    padding: `0 ${theme.spacing(0.5)}`,
  },
}));

export const FormTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(2),
  },
}));
