import { Checkbox, MenuItem, FormHelperText } from "@mui/material";
import { FormControlLabel } from "../../../components/forms/FormControlLabel/FormControlLabel.style";
import { StyledTextField } from "../../../components/forms/TextField/TextField.style";
import { FormTemplate } from "../FormTemplate/FormTemplate";
import { CheckboxLabel, ExpandLink } from "./ContactPersonForm.style";
import { FormikProps } from "formik";

import countryCodes from "../../../asserts/country-codes.json";
import { ContactPersonFormData } from "../../../types/order/order.types";

interface ContactPersonFormProps {
  moveToNextPage: () => void;
  moveToPreviousPage: () => void;
  openContract: () => void;
}

export const ContactPersonForm: React.FC<
  ContactPersonFormProps & FormikProps<ContactPersonFormData>
> = ({
  moveToPreviousPage,
  moveToNextPage,
  openContract,
  values,
  handleChange,
  errors,
  touched,
}) => {
  const expandContract = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    openContract();
  };

  return (
    <FormTemplate
      moveToNextPage={moveToNextPage}
      moveToPreviousPage={moveToPreviousPage}
      title="Contact person"
    >
      <StyledTextField
        name="name"
        label="Name"
        value={values.name}
        onChange={handleChange}
        fullWidth
        data-testid="name-input"
        sx={{ marginBottom: "1em" }}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      <StyledTextField
        name="surname"
        label="Surname"
        value={values.surname}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: "1em" }}
        error={touched.surname && Boolean(errors.surname)}
        helperText={touched.surname && errors.surname}
      />
      <StyledTextField
        name="jobTitle"
        label="Job title"
        value={values.jobTitle}
        onChange={handleChange}
        fullWidth
        sx={{ marginBottom: "1em" }}
        error={touched.jobTitle && Boolean(errors.jobTitle)}
        helperText={touched.jobTitle && errors.jobTitle}
      />
      <StyledTextField
        name="email"
        label="E-mail address"
        fullWidth
        value={values.email}
        onChange={handleChange}
        sx={{ marginBottom: "1em" }}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <div style={{ display: "flex", marginBottom: "1em" }}>
        <StyledTextField
          name="phoneCode"
          sx={{ flex: 2 }}
          data-testid="phoneCode-select"
          select
          value={values.phoneCode}
          onChange={handleChange}
          label="Country code"
          error={touched.phoneCode && Boolean(errors.phoneCode)}
          helperText={touched.phoneCode && errors.phoneCode}
        >
          {countryCodes.map((countryCode, index) => (
            <MenuItem key={index} value={countryCode.dial_code}>
              {countryCode.dial_code}
            </MenuItem>
          ))}
        </StyledTextField>
        <StyledTextField
          name="phoneNumber"
          sx={{ marginLeft: "1em", flex: 3 }}
          label="Phone No."
          value={values.phoneNumber}
          onChange={handleChange}
          error={touched.phoneNumber && Boolean(errors.phoneNumber)}
          helperText={touched.phoneNumber && errors.phoneNumber}
        />
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
            Bank.{" "}
            <ExpandLink onClick={expandContract} href="/">
              Please click to expand
            </ExpandLink>
          </CheckboxLabel>
        }
        control={
          <Checkbox
            name="contract1"
            checked={values.contract1}
            onChange={handleChange}
            sx={{ paddingTop: 0, paddingLeft: 0 }}
          />
        }
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
            SME Bank.{" "}
            <ExpandLink onClick={expandContract} href="/">
              Please click to expand
            </ExpandLink>
          </CheckboxLabel>
        }
        control={
          <Checkbox
            name="contract2"
            checked={values.contract2}
            onChange={handleChange}
            sx={{ paddingTop: 0, paddingLeft: 0 }}
          />
        }
      />
      {(touched.contract1 && Boolean(errors.contract1)) ||
      (touched.contract2 && Boolean(errors.contract2)) ? (
        <FormHelperText sx={{ marginLeft: 2 }} error={true}>
          Please agree with our contracts
        </FormHelperText>
      ) : (
        <></>
      )}
    </FormTemplate>
  );
};
