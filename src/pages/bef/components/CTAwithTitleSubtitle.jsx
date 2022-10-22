import React, { useState } from 'react';
import {
  Flex,
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Container,
} from '@chakra-ui/react';

const CTAwithTitleSubtitle = ({
  h = '50vh',
  align = 'center',
  bg,
  color,
  title,
  subtitle,
  details,
  redirect
}) => {
  return (
    <Flex
      h={h}
      w="100%"
      textAlign={align}
      alignItems="center"
      bg={bg}
      color={color}
      rounded="md"
    >
      <Container maxW="3xl">
        <Text fontSize="5xl" fontWeight="bold" mb={5}>
          {title}
        </Text>
        <Text fontSize="lg">{subtitle}</Text>
        {details && <Text fontSize="lg" mt={3}>{details}</Text>}
        {redirect && <Button colorScheme="blue" mt={5}>Create Account</Button>}
      </Container>
    </Flex>
  );
};

export default CTAwithTitleSubtitle;
