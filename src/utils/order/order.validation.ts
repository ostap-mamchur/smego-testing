import * as yup from "yup";

export const companyFormDataSchema = yup.object({
  companyName: yup.string().required('Company name is required'),
  companyCode: yup.string().required('Company code is required'),
  countryOfRegistration: yup.string().required('Country of registration is required'),
});

export const contactPersonFormDataSchema = yup.object({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  jobTitle: yup.string().required('Job title is required'),
  email: yup.string().email('E-mail is invalid').required('E-mail is required'),
  phoneCode: yup.string().required('Phone code is required'),
  phoneNumber: yup.string().required('Phone number is required').matches(/^[0-9]+$/, "Phone number is invalid")
    .min(9, 'Must be at least 9 digits'),
  contract1: yup.bool().oneOf([true], 'Field must be checked'),
  contract2: yup.bool().oneOf([true], 'Field must be checked')
});

