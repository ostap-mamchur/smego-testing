import { Grid } from "@mui/material";
import { MultiStepForm } from "../MultiStepForm/MultiStepForm";
import { OrderProgress } from "../OrderProgress/OrderProgress";
import { StyledPaper } from "./OrderPage.style";

export const OrderPage: React.FC = () => {
  return (
    <Grid container sx={{ alignItems: "center", height: "100%" }}>
      <Grid item xs={12} sm={12} md={3}>
        <OrderProgress />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <StyledPaper>
          <MultiStepForm />
        </StyledPaper>
      </Grid>
    </Grid>
  );
};
