import { styled } from "@mui/material";

export const CheckboxLabel = styled("div")(({ theme }) => ({
  fontSize: "14px",
  marginTop: "2px",
  color: "#707070",
}));

export const ExpandLink = styled("a")(({ theme }) => ({
  "&": {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));
