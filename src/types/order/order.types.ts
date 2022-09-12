export type Status = "todo" | "active" | "completed";

export interface CompanyFormData {
  companyName: string;
  companyCode: string;
  countryOfRegistration: string;
}

export interface ContactPersonFormData {
  name: string;
  surname: string;
  jobTitle: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  contract1: boolean;
  contract2: boolean;
}
