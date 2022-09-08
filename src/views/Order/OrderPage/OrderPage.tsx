import {
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  InputLabel,
  Button
} from "@mui/material";
import { OrderProgress } from "../OrderProgress/OrderProgress";

export const OrderPage: React.FC = () => {
  return (
    <Grid container sx={{ alignItems: "center" }}>
      <Grid item md={3}>
        <OrderProgress />
      </Grid>
      <Grid item md={6}>
        <Paper sx={{ padding: "1em 1em" }} elevation={3}>
          <Typography variant="h6" component="h3" sx={{ marginBottom: "2em" }}>
            Company
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 1em",
            }}
          >
            <TextField sx={{ marginBottom: "1em" }} label="Company code" />
            <TextField sx={{ marginBottom: "1em" }} label="Company name" />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <div style={{ marginTop: "2em", display: "flex", justifyContent: "space-between" }}>
              <Button variant="outlined">Back</Button>
              <Button variant="contained">Next</Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
