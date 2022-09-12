import { useState } from "react";
import { Contract } from "../Contract/Contract";
import { ContactPersonForm } from "../ContactPersonForm/ContactPersonForm";
import { useFormik } from "formik";
import { useAppDisptach } from "../../../shared/hooks/store/useAppDispatch";
import { useAppSelector } from "../../../shared/hooks/store/useAppSelector";
import { fillContactPersonFormData } from "../../../store/order/order.slice";
import { contactPersonFormDataSchema } from "../../../utils/order/order.validation";

interface ContactPersonFormProps {
  moveToNextPage: () => void;
  moveToPreviousPage: () => void;
}

export const ContactPersonFormWrapper: React.FC<ContactPersonFormProps> = ({
  moveToPreviousPage,
  moveToNextPage,
}) => {
  const [contractOpened, setContractOpened] = useState(false);
  const contactPersonForm = useAppSelector(
    (state) => state.order.formData.contactPerson
  );

  const dispatch = useAppDisptach();

  const formik = useFormik({
    initialValues: contactPersonForm,
    validationSchema: contactPersonFormDataSchema,
    onSubmit: (values) => {
      dispatch(fillContactPersonFormData(values));
      moveToNextPage();
    },
  });


  return !contractOpened ? (
    <ContactPersonForm
      moveToNextPage={formik.handleSubmit}
      moveToPreviousPage={moveToPreviousPage}
      openContract={() => setContractOpened(true)}
      {...formik}
    />
  ) : (
    <Contract moveToPreviousPage={() => setContractOpened(false)} />
  );
};
