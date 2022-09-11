import { styled } from "@mui/material";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

export const FormControlLabel = styled(
  MuiFormControlLabel
)<FormControlLabelProps>(({ theme }) => ({
  "&.MuiFormControlLabel-root": {
    alignItems: "start",
    margin: 0,
  },
}));
