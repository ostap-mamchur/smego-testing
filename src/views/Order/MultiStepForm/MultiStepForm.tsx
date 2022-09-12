import { useAppDisptach } from "../../../shared/hooks/store/useAppDispatch";
import { useAppSelector } from "../../../shared/hooks/store/useAppSelector";
import {
  moveToNextPage,
  moveToPreviousPage,
} from "../../../store/order/order.slice";
import { ComingSoonForm } from "../ComingSoonForm/ComingSoonForm";
import { CompanyForm } from "../CompanyForm/CompanyForm";
import { ContactPersonFormWrapper } from "../ContactPersonFormWrapper/ContactPersonFormWrapper";

export const MultiStepForm: React.FC = () => {
  const currentPage = useAppSelector((state) => state.order.currentPage);

  const dispatch = useAppDisptach();

  const nextAction = () => {
    dispatch(moveToNextPage());
  };

  const backAction = () => {
    dispatch(moveToPreviousPage());
  };

  switch (currentPage) {
    case 1:
      return <CompanyForm moveToNextPage={nextAction} />;
    case 2:
      return (
        <ContactPersonFormWrapper
          moveToNextPage={nextAction}
          moveToPreviousPage={backAction}
        />
      );
    default:
      return <ComingSoonForm />;
  }
};
