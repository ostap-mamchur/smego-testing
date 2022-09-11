import { MenuItem } from "@mui/material";
import { useFormik } from "formik";

import { StyledTextField } from "../../../components/forms/TextField/TextField.style";
import { useAppDisptach } from "../../../shared/hooks/store/useAppDispatch";
import { useAppSelector } from "../../../shared/hooks/store/useAppSelector";
import { fillCompanyFormData } from "../../../store/order/order.slice";
import { FormTemplate } from "../FormTemplate/FormTemplate";
import countries from "../../../asserts/countries.json";
import { companyFormDataSchema } from "../../../utils/order/order.validation";

interface CompanyFormProps {
  moveToNextPage: () => void;
}

export const CompanyForm: React.FC<CompanyFormProps> = ({ moveToNextPage }) => {
  const companyFormData = useAppSelector(
    (state) => state.order.formData.company
  );
  const distpach = useAppDisptach();

  const formik = useFormik({
    initialValues: companyFormData,
    validationSchema: companyFormDataSchema,
    onSubmit: (values) => {
      distpach(fillCompanyFormData(values));
      moveToNextPage();
    },
  });

  return (
    <FormTemplate title="Company" moveToNextPage={formik.handleSubmit}>
      <StyledTextField
        label="Company name"
        name="companyName"
        value={formik.values.companyName}
        onChange={formik.handleChange}
        fullWidth
        sx={{ marginBottom: "1em" }}
        error={formik.touched.companyName && Boolean(formik.errors.companyName)}
        helperText={formik.touched.companyName && formik.errors.companyName}
      />
      <StyledTextField
        label="Company code"
        name="companyCode"
        value={formik.values.companyCode}
        onChange={formik.handleChange}
        fullWidth
        sx={{ marginBottom: "1em" }}
        error={formik.touched.companyCode && Boolean(formik.errors.companyCode)}
        helperText={formik.touched.companyCode && formik.errors.companyCode}
      />
      <StyledTextField
        label="Country of registartion"
        name="countryOfRegistration"
        value={formik.values.countryOfRegistration}
        onChange={formik.handleChange}
        fullWidth
        select
        error={
          formik.touched.countryOfRegistration &&
          Boolean(formik.errors.countryOfRegistration)
        }
        helperText={
          formik.touched.countryOfRegistration &&
          formik.errors.countryOfRegistration
        }
        sx={{ marginBottom: "1em" }}
      >
        {countries.map((country) => (
          <MenuItem value={country.name}>{country.name}</MenuItem>
        ))}
      </StyledTextField>
    </FormTemplate>
  );
};
