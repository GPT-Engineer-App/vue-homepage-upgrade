import { Button, Flex, Heading, VStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box backgroundImage="url('https://example.com/nature-bg.jpg')" backgroundSize="cover" backgroundPosition="center" minHeight="100vh">
      <Flex alignItems="center" justifyContent="center" minHeight="100vh">
        <VStack spacing={12} backgroundColor="white" p={8} borderRadius="lg" boxShadow="lg">
          <Heading size="2xl" color="nature.green">
            Reparto Grupo de Defensa Jurídica
          </Heading>
          <VStack spacing={6}>
            <Button as={Link} to="/asigna" colorScheme="green" size="lg" borderRadius="full" px={12} py={8}>
              Ingresar Datos
            </Button>
            <Button as={Link} to="/consulta" colorScheme="green" size="lg" borderRadius="full" px={12} py={8}>
              Consultar Información
            </Button>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
