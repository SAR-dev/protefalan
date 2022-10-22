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
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaUser,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaGoogle,
  FaHeart,
} from 'react-icons/fa';
import { MdPlace, MdDateRange, MdClose, MdAttachFile } from 'react-icons/md';
import { RiPlayListAddFill } from 'react-icons/ri';
import GetQuote from './GetQuote';

const ProfileBioData = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = useState('');

  const data = {
    id: 1,
    author: {
      name: 'Sayed Rafi',
      username: 'sayed-rafi',
      avatar: 'https://i.imgur.com/8oKUFw6.png',
      desc: 'Chakra UI is a simple, modular and accessible component library',
    },
    rating: {
      score: 3.6,
      votes: 161,
    },
    details: {
      place: 'Dhaka, Bangladesh',
      joined: 'September, 1996',
      last_delivery: '1 month ago',
    },
    desc: "Software development is my passion and profession. I'm a passionate Web Developer. My expertise are in HTML, CSS, JavaScript, Jquery, Bootstrap, Material UI, ReactJS, NextJS, Gatsby, GIT, MySQL, MongoDB, NodeJS, Express, PHP, WordPress., Squarespace, Shopify, and Wix. I have been working on several projects individually and as a part of the team. Anything you want, I would provide you. Contact me and let me know if I can help. I will not dismay you.",
    languages: [
      { name: 'English', level: 'Conversational' },
      { name: 'Bangla', level: 'Fluent' },
    ],
    social: [
      { name: 'Facebook', link: 'fb.com' },
      { name: 'Google', link: 'fb.com' },
      { name: 'Github', link: 'fb.com' },
      { name: 'Twitter', link: 'fb.com' },
    ],
    education: [
      {
        degree: 'B.Sc - Civil Engineering',
        details: ['Islamic University of Technology', 'Graduated 2018'],
      },
      {
        degree: 'M.Sc - Soil Development',
        details: ['Islamic University of Technology', 'Graduated 2020'],
      },
    ],
    certifications: [
      {
        degree: 'Web Designer and Developer',
        details: ['Udemy', 'Completed 2018'],
      },
      {
        degree: 'Diploma in Soil Development',
        details: ['Artificial Intelligence Engineer', 'Completed  2020'],
      },
    ],
  };

  const getFullStar = score => {
    return Math.floor(score);
  };

  const getNullStar = score => {
    return 5 - Math.round(score);
  };

  const getHalfStar = score => {
    return 5 - Math.floor(score) - (5 - Math.round(score));
  };

  return (
    <>
      <Box
        p={5}
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        textAlign="center"
        pos="relative"
      >
        <Icon
          m={5}
          cursor="pointer"
          _hover={{ color: 'gray.600' }}
          as={RiPlayListAddFill}
          h={5}
          w={5}
          color="gray.500"
          pos="absolute"
          top="0"
          left="0"
        />
        <Icon
          m={5}
          cursor="pointer"
          _hover={{ color: 'gray.600' }}
          as={FaHeart}
          h={5}
          w={5}
          color="gray.500"
          pos="absolute"
          top="0"
          right="0"
        />
        <Box
          p={2}
          d="inline-block"
          borderWidth="5px"
          borderColor="teal.500"
          rounded="full"
        >
          <Avatar size="2xl" src={data.author.avatar} name={data.author.name} />
        </Box>
        <Heading fontSize="2xl" mt={3}>
          {data.author.name}
        </Heading>
        <Text fontWeight="semibold" color="gray.700" mt={1}>
          f/{data.author.username}
        </Text>
        <Text color="gray.500" mt={1}>
          {data.author.desc}
        </Text>
        <Box my={5}>
          <Flex justifyContent="center" alignItems="center">
            <HStack spacing={2}>
              {[...Array(Math.floor(getFullStar(data.rating.score)))].map(
                (el, i) => (
                  <Icon as={FaStar} h={5} w={5} color="yellow.400" key={i} />
                )
              )}
              {[...Array(getHalfStar(data.rating.score))].map((el, i) => (
                <Icon
                  as={FaStarHalfAlt}
                  h={5}
                  w={5}
                  color="yellow.400"
                  key={i}
                />
              ))}
              {[...Array(getNullStar(data.rating.score))].map((el, i) => (
                <Icon as={FaRegStar} h={5} w={5} color="gray.400" key={i} />
              ))}
            </HStack>
          </Flex>
          <Flex justifyContent="center" mt={1}>
            <Text fontWeight="semibold">{data.rating.score}</Text>
            <Text color="gray.500" ml={1}>
              ({data.rating.votes} Reviews)
            </Text>
          </Flex>
        </Box>
        <SimpleGrid columns={2} spacing={3}>
          <Button size="sm" colorScheme="teal">Contact Me</Button>
          <Button size="sm" variant="outline" onClick={onOpen}>
            Get a Quote
          </Button>
        </SimpleGrid>
        <Box w="100%" h="1px" bg="gray.200" my={5} />
        <SimpleGrid columns={1} spacing={3} color="gray.700">
          <Flex alignItems="center">
            <Icon as={MdPlace} h={5} w={5} />
            <Text ml={2}>From</Text>
            <Text ml="auto" fontWeight="semibold">
              {data.details.place}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={FaUser} h={5} w={5} />
            <Text ml={2}>Member Since</Text>
            <Text ml="auto" fontWeight="semibold">
              {data.details.joined}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={MdDateRange} h={6} w={5} />
            <Text ml={2}>Last Delivery</Text>
            <Text ml="auto" fontWeight="semibold">
              {data.details.last_delivery}
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box
        p={5}
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        textAlign="center"
      >
        <SimpleGrid columns={1} spacing={5}>
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Description
            </Text>
            <Text color="gray.500">
              {data.desc}
            </Text>
          </Box>
          <Box w="100%" h="1px" bg="gray.200" />
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Languages
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              {data.languages.map((el, i) => (
                <Flex color="gray.700" key={i}>
                  <Text>{el.name}</Text>
                  <Text color="gray.500" ml={2}>
                    - {el.level}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
          <Box w="100%" h="1px" bg="gray.200" />
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Linked Accounts
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              {data.social.map((el, i) => (
                <Flex
                  color="gray.500"
                  alignItems="center"
                  as={ChakraLink}
                  _focus={{ boxShadow: 'none' }}
                  href={el.link}
                  isExternal
                  key={i}
                >
                  {el.name === 'Facebook' && (
                    <Icon as={FaFacebook} h={5} w={5} mr={2} color="#1877f2" />
                  )}
                  {el.name === 'Github' && (
                    <Icon as={FaGithub} h={5} w={5} mr={2} color="#333333" />
                  )}
                  {el.name === 'Twitter' && (
                    <Icon as={FaTwitter} h={5} w={5} mr={2} color="#1da1f2" />
                  )}
                  {el.name === 'Google' && (
                    <Icon as={FaGoogle} h={5} w={5} mr={2} color="#34a853" />
                  )}
                  {el.name}
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
          <Box w="100%" h="1px" bg="gray.200" />
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Education
            </Text>
            <SimpleGrid columns={1} spacing={2} >
              {data.education.map((el, i) => (
                <Box key={i}>
                  <Text color="gray.700" fontWeight="semibold">
                    {el.degree}
                  </Text>
                  {el.details.map((det, i) => (
                    <Text color="gray.500" key={i}>
                      {det}
                    </Text>
                  ))}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          <Box w="100%" h="1px" bg="gray.200" />
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Certifications
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              {data.certifications.map((el, i) => (
                <Box key={i}>
                  <Text color="gray.700" fontWeight="semibold">
                    {el.degree}
                  </Text>
                  {el.details.map((det, i) => (
                    <Text color="gray.500" key={i}>
                      {det}
                    </Text>
                  ))}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="gray.100">
            <Flex alignItems="center">
              <Text>Request a Quote</Text>
              <IconButton
                ml="auto"
                onClick={onClose}
                icon={<Icon as={MdClose} />}
              />
            </Flex>
          </ModalHeader>
          <ModalBody className="ash-scrollbar">
            <GetQuote />
          </ModalBody>
          <ModalFooter bg="gray.100">
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Submit Request</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileBioData;
