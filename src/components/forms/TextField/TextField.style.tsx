import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

export const StyledTextField = styled(({ ...props }: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    InputLabelProps={{
      sx: {
        "&.MuiFormLabel-root": {
          color: "#000000",
          "&.Mui-focused": {
            color: "#B2B2B2",
          },
        },
      },
    }}
    {...props}
    variant="filled"
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: theme.spacing(1),
    backgroundColor: "transparent",
    transition: theme.transitions.create(["border-color", "background-color"]),
    borderColor: "#CCCCCC",
    "&.Mui-focused": {
      backgroundColor: "#F7F7F7",
      borderColor: "#D9D9D9",
    },
  },
}));
