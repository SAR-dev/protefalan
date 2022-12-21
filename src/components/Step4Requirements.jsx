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
import BraftPostEditor from './BraftPostEditor';
import UpdatableTextarea from './UpdatableTextarea';

const Step4Requirements = ({ requirements, setRequirements, save }) => {
  const [requirement, setRequirement] = useState('');

  const addRequirement = () => {
    setRequirements(prevState => [
      ...prevState,
      requirement,
    ]);
    setRequirement('');
  };

  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <Text fontSize="xl" color="gray.700" fontWeight="semibold" mb={1}>
        Provide all the information you need to buyers to get started
      </Text>
      <Text color="gray.700">
        Describe requirements to help buyers provide you with exactly what you need to
        start working on their order.
      </Text>
      <Flex alignItems="center" my={5}>
        <Divider />
        <Text color="gray.700" fontWeight="semibold" px={3} flexShrink="0">
          Your Requirements
        </Text>
        <Divider />
      </Flex>
      <SimpleGrid
        columns={1}
        spacing={5}
        p={10}
        rounded="md"
        bg="#fafafa"
        borderWidth="1px"
        borderColor="gray.200"
      >
        {requirements.length !== 0 && (
          <Table
            variant="simple"
            borderWidth="1px"
            borderColor="gray.200"
            bg="white"
          >
            <Thead>
              <Tr>
                <Th>Requirements</Th>
              </Tr>
            </Thead>
            <Tbody>
              {requirements.map((el, i) => (
                <Tr key={i}>
                  <Td>
                    <UpdatableTextarea value={el} arr={requirements} setArr={setRequirements} index={i}>
                      <Text whiteSpace="pre-wrap">
                        {el}
                      </Text>
                    </UpdatableTextarea>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
        <Textarea
          bg="white"
          value={requirement}
          whiteSpace="pre-wrap"
          onChange={e => setRequirement(e.target.value)}
          placeholder="Describe a requirement..."
          h="120px"
        />
        <Button colorScheme="blue" onClick={() => addRequirement()}>
          Add Requirement
        </Button>
      </SimpleGrid>
      <Flex
        mt={10}
        pt={10}
        borderTopWidth="1px"
        borderTopColor="gray.200"
        justifyContent="space-between"
      >
        <Button variant="outline">Cancel</Button>
        <Button colorScheme="teal" onClick={() => save()}>
          Save & Continue
        </Button>
      </Flex>
    </Box>
  );
};

export default Step4Requirements;
