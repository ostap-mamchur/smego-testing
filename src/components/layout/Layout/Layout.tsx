import { NavBar } from "../NavBar/NavBar";
import Container from "@mui/material/Container";
import { OrderPage } from "../../../views/Order/OrderPage/OrderPage";

export const Layout: React.FC = () => {
  return (
    <Container
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      maxWidth="xl"
    >
      <NavBar />
      <main style={{ flexGrow: "1" }}>
        <OrderPage />
      </main>
    </Container>
  );
};
