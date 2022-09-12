import List from "@mui/material/List";
import { useAppSelector } from "../../../shared/hooks/store/useAppSelector";
import { FormStep } from "../FormStep/FormStep";
import { OrderProgressPercent } from "./OrderProgress.style";
import { OrderService } from "../../../services/order/order.service";

export const OrderProgress: React.FC = () => {
  const currentPage = useAppSelector((state) => state.order.currentPage);

  return (
    <div>
      <OrderProgressPercent>
        {OrderService.getPagePercent(currentPage)}
      </OrderProgressPercent>
      <List sx={{ paddingLeft: 1 }}>
        {OrderService.pages.map((page, index) => (
          <FormStep
            key={index}
            status={OrderService.getStatus(currentPage, index)}
            name={page.name}
          />
        ))}
      </List>
    </div>
  );
};
