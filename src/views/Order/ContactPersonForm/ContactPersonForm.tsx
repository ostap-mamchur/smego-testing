import { Checkbox, MenuItem } from "@mui/material";
import { FormControlLabel } from "../../../components/forms/FormControlLabel/FormControlLabel.style";
import { StyledTextField } from "../../../components/forms/TextField/TextField.style";
import { FormTemplate } from "../FormTemplate/FormTemplate";
import { CheckboxLabel, ExpandLink } from "./ContactPersonForm.style";

import countryCodes from "../../../asserts/country-codes.json";

interface ContactPersonFormProps {
  moveToNextPage: () => void;
  moveToPreviousPage: () => void;
}

export const ContactPersonForm: React.FC<ContactPersonFormProps> = ({
  moveToNextPage,
  moveToPreviousPage,
}) => {
  return (
    <FormTemplate
      moveToNextPage={moveToNextPage}
      moveToPreviousPage={moveToPreviousPage}
      title="Contact person"
    >
      <StyledTextField label="Name" fullWidth sx={{ marginBottom: "1em" }} />
      <StyledTextField label="Surname" fullWidth sx={{ marginBottom: "1em" }} />
      <StyledTextField
        label="Job title"
        fullWidth
        sx={{ marginBottom: "1em" }}
      />
      <StyledTextField
        label="E-mail address"
        fullWidth
        sx={{ marginBottom: "1em" }}
      />
      <div style={{ display: "flex", marginBottom: "1em" }}>
        <StyledTextField sx={{ flex: 2 }} select label="Country code">
          {countryCodes.map((countryCode) => (
            <MenuItem>{countryCode.dial_code}</MenuItem>
          ))}
        </StyledTextField>
        <StyledTextField
          sx={{ marginLeft: "1em", flex: 3 }}
          label="Phone No."
        ></StyledTextField>
      </div>

      <FormControlLabel
        sx={{ marginBottom: "1em" }}
        label={
          <CheckboxLabel>
            I hereby agree that all data submitted herein regarding the company
            I represent along with my submitted personal data shall be used for
            direct marketing purposes with the aim of sending business financing
            proposals targeted and tailored to the aforementioned represented
            company, by UAB SME Finance, UAB SME Finance Leasing and UAB SME
            Bank. <ExpandLink href="/">Please click to expand</ExpandLink>
          </CheckboxLabel>
        }
        control={<Checkbox sx={{ paddingTop: 0, paddingLeft: 0 }} />}
      />
      <FormControlLabel
        sx={{ marginBottom: "1em" }}
        label={
          <CheckboxLabel>
            I hereby agree that UAB SME Finance (legal entity code 304254910,
            address at Antano Tumėno str. 4-1101 (hereinafter – SME Finance))
            and other companies as provided, acting in partnership herewith: UAB
            „SME Finance Leasing“ (legal entity code 305625261, address at
            Antano Tumėno str. 4-15 (hereinafter – SME Finance Leasing)) and UAB
            SME Bank. <ExpandLink href="/">Please click to expand</ExpandLink>
          </CheckboxLabel>
        }
        control={<Checkbox sx={{ paddingTop: 0, paddingLeft: 0 }} />}
      />
    </FormTemplate>
  );
};
