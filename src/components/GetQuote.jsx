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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import {
  FaStar,
  FaUser,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaGoogle,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
} from 'react-icons/fa';
import { MdPlace, MdDateRange, MdClose, MdAttachFile } from 'react-icons/md';
import { RiPlayListAddFill } from 'react-icons/ri';

const GetQuote = () => {
  let [value, setValue] = useState('');
  const [time, setTime] = useState('');
  const times = ['24h', '3d', '7d', '15d', '1m'];

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <>
      <Flex alignItems="center">
        <Avatar
          src="https://i.imgur.com/8oKUFw6.png"
          name="Sayed Rafi"
          mr={5}
        />
        <SimpleGrid columns={1}>
          <Text fontWeight="semibold" color="gray.700">
            Sayed Rafi
          </Text>
          <Text color="gray.500">
            Hi, please provide your request details and I will get back to you.
          </Text>
        </SimpleGrid>
      </Flex>
      <Box w="100%" h="1px" bg="gray.200" my={5} />
      <Text color="gray.700" fontWeight="semibold">
        Describe the service you are looking for. Please be detailed as much as
        possible.
      </Text>
      <Textarea
        placeholder="I'm looking for..."
        h="120px"
        my={2}
        value={value}
        onChange={handleChange}
      />
      <Flex alignItems="center">
        <Button leftIcon={<Icon as={MdAttachFile} transform="rotate(45deg)" />}>
          Attach Files
        </Button>
        <Text color="gray.500" ml="auto">
          {value.length}/2500
        </Text>
      </Flex>
      <Box w="100%" h="1px" bg="gray.200" my={5} />
      <SimpleGrid columns={2} spacing={5} mb={5}>
        <Select placeholder="Select Category">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Select Subategory">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </SimpleGrid>
      <Text color="gray.700" fontWeight="semibold" mb={2}>
        Once you place your order when would you like your order being
        delivered?
      </Text>
      <SimpleGrid columns={5} spacing={2}>
        {times.map((el, i) => (
          <Button
            variant="outline"
            _active={{ bg: 'blue.500', color: 'white' }}
            isActive={time === el}
            onClick={() => setTime(el)}
          >
            24 hours
          </Button>
        ))}
      </SimpleGrid>
      <Box w="100%" h="1px" bg="gray.200" my={5} />
      <Box>
        <Text color="gray.700" fontWeight="semibold" mb={2}>
          What is your budget for this service?
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
            type="number"
            min="0"
          />
          <Input placeholder="0" />
        </InputGroup>
      </Box>
      <Box w="100%" h="1px" bg="gray.200" my={5} />
    </>
  );
};

export default GetQuote;
