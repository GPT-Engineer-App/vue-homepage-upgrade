import { Button, Flex, Heading, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <VStack spacing={8}>
        <Heading size="2xl" color="green.600">
          Reparto Grupo de Defensa Jurídica
        </Heading>
        <VStack spacing={4}>
          <Button colorScheme="green" size="lg" borderRadius="full" px={8}>
            Ingresar Datos
          </Button>
          <Button colorScheme="green" size="lg" borderRadius="full" px={8}>
            Consultar Información
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Index;
