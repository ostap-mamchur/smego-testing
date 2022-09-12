import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyFormData, ContactPersonFormData } from "../../types/order/order.types";

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