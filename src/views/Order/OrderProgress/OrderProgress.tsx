import List from "@mui/material/List";
import { useAppSelector } from "../../../shared/hooks/store/useAppSelector";
import { FormStep } from "../FormStep/FormStep";
import { OrderProgressPercent } from "./OrderProgress.style";

const pages = [
  {
    name: "Product and Amount",
    percent: "0%",
  },
  {
    name: "Company",
    percent: "15%",
  },
  {
    name: "Contact person",
    percent: "25%",
  },
  {
    name: "Beneficial owners",
    percent: "40%",
  },
  {
    name: "Factoring type",
    percent: "60%",
  },
  {
    name: "Third parties",
    percent: "80%",
  },
];

type status = "todo" | "active" | "completed";

function getStatus(currentPage: number, pageNumber: number): status {
  if (pageNumber < currentPage) {
    return "completed";
  } else if (pageNumber === currentPage) {
    return "active";
  } else {
    return "todo";
  }
}

export const OrderProgress: React.FC = () => {
  const currentPage = useAppSelector((state) => state.order.currentPage);

  return (
    <div>
      <OrderProgressPercent>{pages[currentPage].percent}</OrderProgressPercent>
      <List sx={{ paddingLeft: 1 }}>
        {pages.map((page, index) => (
          <FormStep
            key={index}
            status={getStatus(currentPage, index)}
            name={page.name}
          />
        ))}
      </List>
    </div>
  );
};
