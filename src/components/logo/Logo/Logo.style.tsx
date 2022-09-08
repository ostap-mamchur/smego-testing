import { styled } from "@mui/material";

export const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: theme.spacing(1),
  },
}));

export const LogoText = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: "35px"
}));
