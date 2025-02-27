/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Box, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export default function Portfolio() {
  const technologies = [
    { name: "ReactJS", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "VueJS", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "NestJS", image: "https://upload.wikimedia.org/wikipedia/commons/3/37/NestJS-logo-wordmark.svg" },
    { name: "Firebase", image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    { name: "AWS", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Spring Boot", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
    { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Docker", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { name: "Kubernetes", image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
    { name: "React Native", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Flutter", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
    { name: "Expo", image: "/logo-type-a.svg" },
    { name: "MongoDB", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "MySQL", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  ];

  return (
    <Box textAlign="center" py={10}>
      <Heading size="lg" mb={4}>
        Tecnologías y Herramientas
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
        {technologies.map((tech) => (
          <VStack key={tech.name} spacing={3} align="center">
            <Image src={tech.image} boxSize="80px" objectFit="contain" alt={tech.name} />
            <Text fontSize="md" fontWeight="bold">
              {tech.name}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
