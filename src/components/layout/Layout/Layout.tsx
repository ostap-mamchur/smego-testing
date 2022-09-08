import { NavBar } from "../NavBar/NavBar";
import Container from '@mui/material/Container';
import { OrderPage } from "../../../views/Order/OrderPage/OrderPage";


export const Layout: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <NavBar />
      <main>
        <OrderPage />
      </main>
    </Container>
  );
};
