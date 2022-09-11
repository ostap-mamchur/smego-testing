import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyFormData {
  companyName: string;
  companyCode: string;
  countryOfRegistration: string;
}

interface ContactPersonFormData {
  name: string;
  surname: string;
  jobTitle: string;
  countryOfCode: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  contract1: boolean;
  contract2: boolean;
}

interface OrderState {
  formData: {
    company: CompanyFormData;
    contactPerson: ContactPersonFormData;
  };
  currentPage: number;
}

const initialState: OrderState = {
  formData: {
    company: {
      companyName: "",
      companyCode: "",
      countryOfRegistration: "",
    },
    contactPerson: {
      name: "",
      surname: "",
      jobTitle: "",
      email: "",
      countryOfCode: "",
      phoneCode: "",
      phoneNumber: "",
      contract1: false,
      contract2: false,
    }
  },
  currentPage: 1,
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    moveToNextPage: (state) => {
      state.currentPage += 1;
    },
    moveToPreviousPage: (state) => {
      state.currentPage -= 1;
    },
    fillCompanyFormData: (state, action: PayloadAction<CompanyFormData>) => {
      state.formData.company = action.payload;
    },
    fillContactPersonFormData: (state, action: PayloadAction<ContactPersonFormData>) => {
      state.formData.contactPerson = action.payload;
    }
  }
});

export const orderReducer = orderSlice.reducer;
export const { moveToNextPage, moveToPreviousPage, fillCompanyFormData, fillContactPersonFormData } = orderSlice.actions;