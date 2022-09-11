import { useState } from "react";
import { CompanyForm } from "../CompanyForm/CompanyForm";
import { ContactPersonForm } from "../ContactPersonForm/ContactPersonForm";
import { Contract } from "../Contract/Contract";

export const MultiStepForm: React.FC = () => {
  const [page, setPage] = useState(1);

  const moveToNextPage = () => {
    setPage(page + 1);
  };

  const moveToPreviousPage = () => {
    setPage(page - 1);
  };

  switch (page) {
    case 1:
      return <CompanyForm moveToNextPage={moveToNextPage} />;
    case 2:
      return <ContactPersonForm moveToNextPage={moveToNextPage} moveToPreviousPage={moveToPreviousPage} />;
    case 3:
      return <Contract moveToPreviousPage={moveToPreviousPage} />;
    default:
      return <></>;
  }
};
