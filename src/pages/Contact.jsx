import { Box, Heading, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <Box textAlign="center" p={10}>
      <Heading>Contacto</Heading>
      <Text>Puedes encontrarme en LinkedIn o GitHub.</Text>

      <Footer />
    </Box>
  );
}
