import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";

export default function Projects() {
  const projects = [
    { name: "Web Tienda Cerca", description: "Plataforma de e-commerce local con integración de pagos." },
    { name: "Gob City", description: "Aplicación móvil para gestión urbana y servicios municipales." },
    { name: "CamionGo", description: "Aplicación para gestión logística y transporte de carga." },
    { name: "Plataforma de Identificación Biométrica", description: "Sistema de autenticación biométrica para WOM." },
  ];

  return (
    <Box textAlign="center" py={10}>
      <Heading size="lg" mb={4}>
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
      <Footer />
    </Box>
  );
}
