import List from "@mui/material/List";
import { FormStep } from "../FormStep/FormStep";
import { OrderProgressPercent } from "./OrderProgress.style";

export const OrderProgress: React.FC = () => {
  return (
    <div>
      <OrderProgressPercent>15%</OrderProgressPercent>
      <List sx={{ paddingLeft: 1 }}>
        <FormStep status="completed" name="Product and Amount" />
        <FormStep status="completed" name="Company" />
        <FormStep status="active" name="Contact person" />
        <FormStep status="todo" name="Beneficial owners" />
        <FormStep status="todo" name="Factoring type" />
        <FormStep status="todo" name="Third parties" />
      </List>
    </div>
  );
};
