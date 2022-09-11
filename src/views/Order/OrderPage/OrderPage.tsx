import { Grid } from "@mui/material";
import { CompanyForm } from "../CompanyForm/CompanyForm";
import { ContactPersonForm } from "../ContactPersonForm/ContactPersonForm";
import { Contract } from "../Contract/Contract";
import { MultiStepForm } from "../MultiStepForm/MultiStepForm";
import { OrderProgress } from "../OrderProgress/OrderProgress";
import { StyledPaper } from "./OrderPage.style";

export const OrderPage: React.FC = () => {
  return (
    <Grid container sx={{ alignItems: "center", height: "100%" }}>
      <Grid item md={3}>
        <OrderProgress />
      </Grid>
      <Grid item md={6}>
        <StyledPaper>
          <MultiStepForm />
        </StyledPaper>
      </Grid>
    </Grid>
  );
};
