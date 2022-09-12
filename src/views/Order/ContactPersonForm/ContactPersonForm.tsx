import { Checkbox, MenuItem, FormHelperText } from "@mui/material";
import { FormControlLabel } from "../../../components/forms/FormControlLabel/FormControlLabel.style";
import { StyledTextField } from "../../../components/forms/TextField/TextField.style";
import { FormTemplate } from "../FormTemplate/FormTemplate";
import { CheckboxLabel, ExpandLink } from "./ContactPersonForm.style";

import countryCodes from "../../../asserts/country-codes.json";
import { useFormik } from "formik";
import { useAppSelector } from "../../../shared/hooks/store/useAppSelector";
import { contactPersonFormDataSchema } from "../../../utils/order/order.validation";
import { useState } from "react";
import { Contract } from "../Contract/Contract";
import { useAppDisptach } from "../../../shared/hooks/store/useAppDispatch";
import { fillContactPersonFormData } from "../../../store/order/order.slice";

interface ContactPersonFormProps {
  moveToNextPage: () => void;
  moveToPreviousPage: () => void;
}

export const ContactPersonForm: React.FC<ContactPersonFormProps> = ({
  moveToPreviousPage,
  moveToNextPage
}) => {
  const contactPersonForm = useAppSelector(
    (state) => state.order.formData.contactPerson
  );
  const dispatch = useAppDisptach();

  const [contractOpened, setContractOpened] = useState(false);

  const formik = useFormik({
    initialValues: contactPersonForm,
    validationSchema: contactPersonFormDataSchema,
    onSubmit: (values) => {
      dispatch(fillContactPersonFormData(values));
      moveToNextPage();
    },
  });

  const expandContract = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setContractOpened(true);
  };

  return !contractOpened ? (
    <FormTemplate
      moveToNextPage={formik.handleSubmit}
      moveToPreviousPage={moveToPreviousPage}
      title="Contact person"
    >
      <StyledTextField
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        fullWidth
        data-testid="name-input"
        sx={{ marginBottom: "1em" }}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <StyledTextField
        name="surname"
        label="Surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        fullWidth
        sx={{ marginBottom: "1em" }}
        error={formik.touched.surname && Boolean(formik.errors.surname)}
        helperText={formik.touched.surname && formik.errors.surname}
      />
      <StyledTextField
        name="jobTitle"
        label="Job title"
        value={formik.values.jobTitle}
        onChange={formik.handleChange}
        fullWidth
        sx={{ marginBottom: "1em" }}
        error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
        helperText={formik.touched.jobTitle && formik.errors.jobTitle}
      />
      <StyledTextField
        name="email"
        label="E-mail address"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        sx={{ marginBottom: "1em" }}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <div style={{ display: "flex", marginBottom: "1em" }}>
        <StyledTextField
          name="phoneCode"
          sx={{ flex: 2 }}
          data-testid="phoneCode-select"
          select
          value={formik.values.phoneCode}
          onChange={formik.handleChange}
          label="Country code"
          error={formik.touched.phoneCode && Boolean(formik.errors.phoneCode)}
          helperText={formik.touched.phoneCode && formik.errors.phoneCode}
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
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
            <ExpandLink  onClick={expandContract} href="/">
              Please click to expand
            </ExpandLink>
          </CheckboxLabel>
        }
        control={
          <Checkbox
            name="contract1"
            checked={formik.values.contract1}
            onChange={formik.handleChange}
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
            SME Bank. <ExpandLink onClick={expandContract} href="/">Please click to expand</ExpandLink>
          </CheckboxLabel>
        }
        control={
          <Checkbox
            name="contract2"
            checked={formik.values.contract2}
            onChange={formik.handleChange}
            sx={{ paddingTop: 0, paddingLeft: 0 }}
          />
        }
      />
      {(formik.touched.contract1 && Boolean(formik.errors.contract1)) ||
      (formik.touched.contract2 && Boolean(formik.errors.contract2)) ? (
        <FormHelperText sx={{ marginLeft: 2 }} error={true}>
          Please agree with our contracts
        </FormHelperText>
      ) : (
        <></>
      )}
    </FormTemplate>
  ) : (
    <Contract moveToPreviousPage={() => setContractOpened(false)} />
  );
};
