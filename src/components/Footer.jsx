import { Box, Link, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <Box as="footer" mt={10} textAlign="center" py={4} borderTop="1px solid #ddd">
      <Link href="https://github.com/DevZatokio" isExternal>
        <Button leftIcon={<FaGithub />} colorScheme="gray" mr={4}>
          GitHub
        </Button>
      </Link>
      <Link href="https://linkedin.com/in/camilo-andres-orellana-loyola" isExternal>
        <Button leftIcon={<FaLinkedin />} colorScheme="blue">
          LinkedIn
        </Button>
      </Link>
    </Box>
  );
}
