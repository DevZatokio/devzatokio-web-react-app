import { Box, Container, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <Box>
      <Container maxW="container.lg">
        <Portfolio />
        <Projects />
        <Footer />
      </Container>
    </Box>
  );
}

function Projects() {
  const projects = [
    { name: "Web Tienda Cerca", description: "Plataforma de e-commerce local con integración de pagos." },
    { name: "Gob City", description: "Aplicación móvil para gestión urbana y servicios municipales." },
    { name: "CamionGo", description: "Aplicación para gestión logística y transporte de carga." },
    { name: "Plataforma de Identificación Biométrica", description: "Sistema de autenticación biométrica para WOM." },
  ];

  return (
    <Box textAlign="center" py={10}>
      <Heading size="lg" my={4}>
        Proyectos Destacados
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {projects.map((project) => (
          <VStack key={project.name} p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
            <Heading size="md">{project.name}</Heading>
            <Text>{project.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
