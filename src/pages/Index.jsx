import { Button, Flex, Heading, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <VStack spacing={12}>
        <Heading size="3xl" color="green.500">
          Reparto Grupo de Defensa Jurídica
        </Heading>
        <VStack spacing={6}>
          <Button colorScheme="green" size="lg" borderRadius="full" px={12} py={8}>
            Ingresar Datos
          </Button>
          <Button colorScheme="green" size="lg" borderRadius="full" px={12} py={8}>
            Consultar Información
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Index;
