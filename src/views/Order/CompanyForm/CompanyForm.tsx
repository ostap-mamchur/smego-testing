import { MenuItem } from "@mui/material";
import { StyledTextField } from "../../../components/forms/TextField/TextField.style";
import { FormTemplate } from "../FormTemplate/FormTemplate";

interface CompanyFormProps {
  moveToNextPage: () => void;
}

export const CompanyForm: React.FC<CompanyFormProps> = ({ moveToNextPage }) => {
  return (
    <FormTemplate title="Company" moveToNextPage={moveToNextPage}>
      <StyledTextField
        label="Company name"
        fullWidth
        sx={{ marginBottom: "1em" }}
      />
      <StyledTextField
        label="Company code"
        fullWidth
        sx={{ marginBottom: "1em" }}
      />
      <StyledTextField
        label="Country of registartion"
        fullWidth
        select
        sx={{ marginBottom: "1em" }}
      >
        <MenuItem>Hello</MenuItem>
        <MenuItem>Hello</MenuItem>
      </StyledTextField>
    </FormTemplate>
  );
};
