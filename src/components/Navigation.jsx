import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box backgroundColor="nature.green" py={4}>
      <Flex alignItems="center" maxWidth="6xl" mx="auto">
        <Heading as={Link} to="/" size="lg" color="white">
          Reparto Grupo de Defensa Jurídica
        </Heading>
        <Spacer />
        {}
      </Flex>
    </Box>
  );
};

export default Navigation;
