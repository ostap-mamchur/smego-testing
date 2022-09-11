import { useAppDisptach } from "../../../shared/hooks/store/useAppDispatch";
import { useAppSelector } from "../../../shared/hooks/store/useAppSelector";
import { moveToNextPage, moveToPreviousPage } from "../../../store/order/order.slice";
import { CompanyForm } from "../CompanyForm/CompanyForm";
import { ContactPersonForm } from "../ContactPersonForm/ContactPersonForm";

export const MultiStepForm: React.FC = () => {
  const currentPage = useAppSelector((state) => state.order.currentPage);

  const dispatch = useAppDisptach();

  const nextAction = () => {
    dispatch(moveToNextPage())
  };

  const backAction = () => {
    dispatch(moveToPreviousPage());
  };

  switch (currentPage) {
    case 1:
      return <CompanyForm moveToNextPage={nextAction} />;
    case 2:
      return <ContactPersonForm moveToNextPage={nextAction} moveToPreviousPage={backAction} />;
    default:
      return <></>;
  }
};
