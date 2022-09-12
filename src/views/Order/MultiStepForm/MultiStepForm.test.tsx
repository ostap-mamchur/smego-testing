/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-render-in-setup */
import {
  screen,
  render,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import { resetState, store } from "../../../store";
import { MultiStepForm } from "./MultiStepForm";

const formData = {
  company: {
    companyCode: "1234",
    companyName: "SmeGo",
    countryOfRegistration: "Ukraine",
  },
  contactPerson: {
    contract1: true,
    contract2: true,
    email: "mamchurostap26@gmail.com",
    jobTitle: "Developer",
    name: "Ostap",
    phoneCode: "+380",
    phoneNumber: "730396894",
    surname: "Mamchur",
  },
};

describe("MultiStepForm", () => {
  beforeEach(async () => {
    store.dispatch(resetState());
    return render(
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    );
  });

  it("Company form", async () => {
    user.type(getCompanyName(), formData.company.companyName);

    user.type(getCompanyCode(), formData.company.companyCode);

    selectCompanyCountryOfRegistration(formData.company.countryOfRegistration);

    moveToNextForm();

    await waitUntilContactPersonFormLoaded();

    user.type(getPersonName(), formData.contactPerson.name);

    user.type(getPersonSurname(), formData.contactPerson.surname);

    user.type(getPersonJob(), formData.contactPerson.jobTitle);

    user.type(getPersonEmail(), formData.contactPerson.email);

    selectPersonPhoneCode(formData.contactPerson.phoneCode);

    user.type(getPersonPhoneNumber(), formData.contactPerson.phoneNumber);

    fireEvent.click(getContract1());

    fireEvent.click(getContract2());

    moveToNextForm();

    await waitUntilFormSubmited();

    expect(store.getState().order.formData).toEqual(formData);
  });

  it("Has required field on the company form", async () => {
    moveToNextForm();

    await waitFor(() => {
      expect(screen.getByText(/company name is required/i)).toBeInTheDocument();

      expect(screen.getByText(/company code is required/i)).toBeInTheDocument();
      
      expect(
        screen.getByText(/country of registration is required/i)
      ).toBeInTheDocument();
    });
  });
});

function getCompanyName() {
  return screen.getByRole("textbox", {
    name: /company name/i,
  });
}

function getCompanyCode() {
  return screen.getByRole("textbox", {
    name: /company code/i,
  });
}

function selectCompanyCountryOfRegistration(country: string) {
  fireEvent.mouseDown(screen.getByRole("button", { expanded: false }));

  const countryOfRegistrationListbox = within(screen.getByRole("listbox"));

  fireEvent.click(countryOfRegistrationListbox.getByText(country));
}

function moveToNextForm() {
  fireEvent.click(
    screen.getByRole("button", {
      name: /next/i,
    })
  );
}

async function waitUntilContactPersonFormLoaded() {
  await screen.findByRole("heading", {
    name: /contact person/i,
  });
}

function getPersonName() {
  return within(screen.getByTestId("name-input")).getByRole("textbox", {
    name: /name/i,
  });
}

function getPersonSurname() {
  return screen.getByRole("textbox", {
    name: /surname/i,
  });
}

function getPersonJob() {
  return screen.getByRole("textbox", {
    name: /job title/i,
  });
}

function selectPersonPhoneCode(phoneCode: string) {
  const phoneCodeSelect = within(
    screen.getByTestId("phoneCode-select")
  ).getByRole("button", { expanded: false });

  fireEvent.mouseDown(phoneCodeSelect);

  const phoneCodeListbox = within(screen.getByRole("listbox"));

  fireEvent.click(phoneCodeListbox.getByText(phoneCode));
}

function getPersonEmail() {
  return screen.getByRole("textbox", {
    name: /e\-mail address/i,
  });
}

function getPersonPhoneNumber() {
  return screen.getByRole("textbox", {
    name: /phone no\./i,
  });
}

function getContract1() {
  return screen.getByRole("checkbox", {
    name: /i hereby agree that all data submitted herein regarding the company i represent along with my submitted personal data shall be used for direct marketing purposes with the aim of sending business financing proposals targeted and tailored to the aforementioned represented company, by uab sme finance, uab sme finance leasing and uab sme bank\. please click to expand/i,
  });
}

function getContract2() {
  return screen.getByRole("checkbox", {
    name: /i hereby agree that uab sme finance \(legal entity code 304254910, address at antano tumėno str\. 4\-1101 \(hereinafter – sme finance\)\) and other companies as provided, acting in partnership herewith: uab „sme finance leasing“ \(legal entity code 305625261, address at antano tumėno str\. 4\-15 \(hereinafter – sme finance leasing\)\) and uab sme bank\. please click to expand/i,
  });
}

async function waitUntilFormSubmited() {
  await screen.findByRole("heading", {
    name: /coming soon\.\.\./i,
  });
}
