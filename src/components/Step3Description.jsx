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
} from '@chakra-ui/react';
import BraftPostEditor from './BraftPostEditor';
import UpdatableTextareaWithInput from './UpdatableTextareaWithInput';

const Step3Description = ({ description, setDescription, faq, setFaq, save }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const addFaq = () => {
    setFaq(prevState => [...prevState, { question, answer }]);
    setQuestion('');
    setAnswer('');
  };
  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <Text
        fontSize="xl"
        color="gray.700"
        fontWeight="semibold"
        mb={5}
        pb={5}
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        Description
      </Text>
      <Box w="100%" mb={5}>
        <Text color="gray.700" mb={5}>
          Briefly describe your gig
        </Text>
        {description.length >= 1 && (
          <BraftPostEditor post={description} setPost={setDescription} height={350} />
        )}
      </Box>
      <Text
        fontSize="xl"
        color="gray.700"
        fontWeight="semibold"
        mb={5}
        pb={5}
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        Frequently Asked Questions
      </Text>
      <Box
        w="100%"
        borderWidth="1px"
        borderColor="gray.200"
        bg="#fafafa"
        rounded="md"
        mb={10}
        p={10}
      >
        {faq.length !== 0 && (
          <SimpleGrid columns={1} spacing={3} mb={5} bg="white" p={5} rounded="md">
            {faq.map((el, i) => (
              <UpdatableTextareaWithInput input={el.question} textarea={el.answer} arr={faq} setArr={setFaq} index={i} key={i}>
                <Box color="gray.700" pb={3} borderBottom="1px solid #eee">
                  <Text fontWeight="semibold" mb={3}>
                    {el.question}
                  </Text>
                  <Text whiteSpace="pre-wrap">{el.answer}</Text>
                </Box>
              </UpdatableTextareaWithInput>
            ))}
          </SimpleGrid>
        )}
        <SimpleGrid columns={1} spacing={3}>
          <Input
            bg="white"
            placeholder="Question"
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
          <Textarea
            bg="white"
            placeholder="Answer"
            whiteSpace="pre-wrap"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
          />
          <Button colorScheme="blue" onClick={() => addFaq()}>
            Add FAQ
          </Button>
        </SimpleGrid>
      </Box>
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

export default Step3Description;
