import { Flex, Heading, HStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Flex textAlign="center" justifyContent={"space-between"} mb={5}>
      <Heading size="lg">Camilo Andres Orellana Loyola</Heading>
      <HStack spacing={4} justify="center">
        <Button as={RouterLink} to="/" colorScheme="transparent" color={"black"}>
          Inicio
        </Button>
        <Button as={RouterLink} to="/projects" colorScheme="transparent" color={"black"}>
          Proyectos
        </Button>
        <Button as={RouterLink} to="/contact" colorScheme="transparent" color={"black"}>
          Contacto
        </Button>
      </HStack>
    </Flex>
  );
}
