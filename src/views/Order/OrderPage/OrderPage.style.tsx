import { alpha, styled } from "@mui/material";
import Paper, { PaperProps } from "@mui/material/Paper";

export const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  borderRadius: theme.spacing(3),
  boxShadow: `0 0 20px 2px ${alpha(theme.palette.grey["800"], 0.2)}`,
  padding: `${theme.spacing(4)}`,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));
