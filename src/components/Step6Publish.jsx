import React, { useState, createRef } from 'react';
import {
  Flex,
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
  Grid,
  GridItem,
  Avatar,
  Heading,
  HStack,
  Divider,
  Select,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  Checkbox,
  CheckboxGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Step6Publish = () => {
  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <Text
        fontSize="2xl"
        color="blue.500"
        fontWeight="semibold"
        textAlign="center"
        mb={2}
      >
        ALMOST THERE
      </Text>
      <Text color="gray.700" textAlign="center" w="350px" mx="auto" mb={5}>
        Let's publish your gig and roll some buyers in!
      </Text>
      <Flex justifyContent="center">
        <Button as={Link} to="/" colorScheme="teal">Publish</Button>
      </Flex>
    </Box>
  );
};

export default Step6Publish;
