import { ListItemIcon } from "@mui/material";
import { ListItemName, ListItem } from "./FormStep.style";
import DoneIcon from "@mui/icons-material/CheckCircleOutlined";
import type { Status } from "../../../types/order/order.types";

interface FormStepProps {
  status: Status;
  name: string;
}

export const FormStep: React.FC<FormStepProps> = ({ status, name }) => {
  return (
    <ListItem sx={{ marginBottom: "2px" }} status={status}>
      <ListItemName sx={{ display: "inline" }}>{name}</ListItemName>
      {status === "completed" && (
        <ListItemIcon>
          <DoneIcon color="primary" />
        </ListItemIcon>
      )}
    </ListItem>
  );
};
