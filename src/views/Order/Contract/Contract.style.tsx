import { styled } from "@mui/material";

export const ContractText = styled("div")(({ theme }) => ({
  fontSize: "14px",
  marginTop: "2px",
  color: "#707070",
  paddingRight: theme.spacing(2),

  "&::-webkit-scrollbar": {
    width: theme.spacing(0.5),
  },

  /* Track */
  "&::-webkit-scrollbar-track ": {
    background: "#EFEFEF",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb ": {
    background: "#cccccc",
    borderRadius: 16
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover ": {
    background: "#555",
  },
}));
