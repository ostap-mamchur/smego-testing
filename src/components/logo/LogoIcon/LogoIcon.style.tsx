import { styled } from "@mui/material";

export const LogoIconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& > * + *": {
    marginTop: theme.spacing(0.5),
  },
}));

export const LogoIconPiece = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));
