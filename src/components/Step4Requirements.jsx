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

const Step4Requirements = ({ save }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [required, setRequired] = useState(false);
  const [answer_form, set_answer_form] = useState();
  const answer_forms = [
    { value: 1, name: 'Plain Text' },
    { value: 2, name: 'Multiple Choice' },
    { value: 3, name: 'Attachment' },
  ];

  const addQuestion = () => {
    setQuestions(prevState => [
      ...prevState,
      { question, required, answer_form },
    ]);
    setQuestion('');
    setRequired(false);
    set_answer_form();
  };

  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <Text fontSize="xl" color="gray.700" fontWeight="semibold" mb={1}>
        Get all the information you need from buyers to get started
      </Text>
      <Text color="gray.700">
        Add questions to help buyers provide you with exactly what you need to
        start working on their order.
      </Text>
      <Flex alignItems="center" my={5}>
        <Divider />
        <Text color="gray.700" fontWeight="semibold" px={3} flexShrink="0">
          Your Questions
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
        {questions.length !== 0 && (
          <Table
            variant="simple"
            borderWidth="1px"
            borderColor="gray.200"
            bg="white"
          >
            <Thead>
              <Tr>
                <Th>Question</Th>
                <Th>Required</Th>
                <Th isNumeric>Answer Format</Th>
              </Tr>
            </Thead>
            <Tbody>
              {questions.map((el, i) => (
                <Tr key={i}>
                  <Td>{el.question}</Td>
                  <Td>{el.required ? 'Yes' : 'No'}</Td>
                  <Td isNumeric>
                    {answer_forms.find(a => a.id === el.id).name}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
        <Textarea
          bg="white"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          h="120px"
        />
        <Checkbox
          isChecked={required}
          onChange={e => setRequired(e.target.checked)}
        >
          Required
        </Checkbox>
        <Box>
          <Text color="gray.500" mb={1}>
            Get it in a format of:
          </Text>
          <Select
            bg="white"
            value={answer_form}
            onChange={e => set_answer_form(e.target.value)}
            w="300px"
          >
            <option value="" disabled selected>
              Select Format
            </option>
            {answer_forms.map((el, i) => (
              <option value={el.id} selected={el === answer_form} key={i}>
                {el.name}
              </option>
            ))}
          </Select>
        </Box>
        <Button colorScheme="blue" onClick={() => addQuestion()}>
          Add Question
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
