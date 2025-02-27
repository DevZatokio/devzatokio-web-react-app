import { Container } from "@chakra-ui/react";
import AppRoutes from "./AppRoutes"; // 📌 Importa las rutas aquí
import Navigation from "./pages/Navigation";

export default function App() {
  return (
    <Container maxW="container.xl" color="black" minH="100vh" py={10}>
      <Navigation />
      <AppRoutes /> {/* 📌 Aquí se cargan las rutas dinámicamente */}
    </Container>
  );
}
