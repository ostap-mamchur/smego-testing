import { ListItemIcon } from "@mui/material";
import { ListItemName, ListItem } from "./FormStep.style";
import DoneIcon from "@mui/icons-material/CheckCircleOutlined";

interface FormStepProps {
  status: "completed" | "active" | "todo";
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
