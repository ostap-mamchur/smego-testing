import { styled } from "@mui/material";
import MuiListItemText, { ListItemTextProps } from "@mui/material/ListItemText";
import MuiListItem, {
  ListItemProps as MuiListItemProps,
} from "@mui/material/ListItem";
import type { Status } from "../../../types/order/order.types";

export const ListItemName = styled(MuiListItemText)<ListItemTextProps>(
  ({ theme }) => ({
    flex: "none",
    marginRight: theme.spacing(1),
  })
);

interface ListItemProps extends MuiListItemProps {
  status?: Status;
}

export const ListItem = styled(MuiListItem)<ListItemProps>(
  ({ theme, status = "todo" }) => {
    const color =
      status === "completed"
        ? theme.palette.primary.main
        : status === "active"
        ? theme.palette.action.active
        : theme.palette.action.disabled;

    return {
      borderLeft: `3px solid ${color}`,
      color,
    };
  }
);
