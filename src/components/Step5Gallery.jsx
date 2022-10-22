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
import { RiImageAddFill, RiVideoAddLine, RiFolderHistoryLine } from 'react-icons/ri';
import {ImAttachment} from 'react-icons/im'

const Step5Gallery = ({ save }) => {
  const imageInputReference = createRef();
  const videoInputReference = createRef();
  const fileInputReference = createRef();
  const imageExtensions = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/bmp',
    'image/tif',
    'image/tiff',
    'image/webp',
  ];
  const [images, setImages] = useState([]);
  function handleImage(event) {
    if (
      event.target.files[0] &&
      imageExtensions.includes(event.target.files[0].type)
    ) {
      setImages(prevState => [...prevState, event.target.files[0]]);
    }
  }

  const videoExtensions = ['video/mp4'];
  const [videos, setVideos] = useState([]);
  function handleVideo(event) {
    if (
      event.target.files[0] &&
      videoExtensions.includes(event.target.files[0].type)
    ) {
      setVideos(prevState => [...prevState, event.target.files[0]]);
    }
  }

  const [files, setFiles] = useState([]);
  function handleFile(event) {
    if (event.target.files[0]) {
      setFiles(prevState => [...prevState, event.target.files[0]]);
    }
  }

  function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }
 

  return (
    <Box p={10} borderWidth="1px" borderColor="gray.200" rounded="md">
      <Text fontSize="xl" color="gray.700" fontWeight="semibold" mb={1}>
        Showcase Your Services in a Gig Gallery
      </Text>
      <Text color="gray.700">
        Encourage your buyers to choose your Gig by featuring a variety of your
        work.
      </Text>

      <SimpleGrid columns={1} spacing={5} mt={5}>
        <Box
          bg="#fafafa"
          p={5}
          rounded="md"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Text color="gray.700" fontWeight="semibold" mb={3}>
            Add Images
          </Text>
          <SimpleGrid columns={4} spacing={5}>
            {images.map((el, i) => (
              <Box
                w="100%"
                p={2}
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                rounded="md"
                key={i}
              >
                <Image
                  h="150px"
                  rounded="md"
                  objectFit="cover"
                  src={URL.createObjectURL(el)}
                />
              </Box>
            ))}
            <IconButton
              h="100%"
              minH="150px"
              w="100%"
              colorScheme="blue"
              bg="white"
              color="gray.700"
              borderWidth="1px"
              borderColor="gray.200"
              _hover={{bg: "blue.500", color: "white"}}
              _focus={{bg: "blue.500", color: "white"}}
              _active={{bg: "blue.500", color: "white"}}
              icon={<Icon as={RiImageAddFill} h={16} w={16} />}
              onClick={() => imageInputReference.current.click()}
            />
            <input
              type="file"
              hidden
              ref={imageInputReference}
              onChange={handleImage}
            />
          </SimpleGrid>
        </Box>

        <Box
          bg="#fafafa"
          p={5}
          rounded="md"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Text color="gray.700" fontWeight="semibold" mb={3}>
            Add Videos
          </Text>
          <SimpleGrid columns={4} spacing={5}>
            {videos.map((el, i) => (
              <Box
                w="100%"
                p={2}
                bg="gray.700"
                borderWidth="1px"
                borderColor="gray.200"
                rounded="md"
                key={i}
              >
                <video controls>
                  <source src={URL.createObjectURL(el)} />
                </video>
                <Text color="white" fontSize="xs" isTruncated mt={2}>
                  {el.name}
                </Text>
              </Box>
            ))}
            <IconButton
              h="100%"
              minH="150px"
              w="100%"
              colorScheme="blue"
              bg="white"
              color="gray.700"
              borderWidth="1px"
              borderColor="gray.200"
              _hover={{bg: "blue.500", color: "white"}}
              _focus={{bg: "blue.500", color: "white"}}
              _active={{bg: "blue.500", color: "white"}}
              icon={<Icon as={RiVideoAddLine} h={16} w={16} />}
              onClick={() => videoInputReference.current.click()}
            />
            <input
              type="file"
              hidden
              ref={videoInputReference}
              onChange={handleVideo}
            />
          </SimpleGrid>
        </Box>

        <Box
          bg="#fafafa"
          p={5}
          rounded="md"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Text color="gray.700" fontWeight="semibold" mb={3}>
            Add Documents
          </Text>
          <SimpleGrid columns={1} spacing={5}>
          {files.map((el, i) => (
              <Flex
                w="100%"
                p={2}
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                rounded="md"
                alignItems="center"
                key={i}
              >
                <Icon as={RiFolderHistoryLine} mr={2} />
                <Text color="gray.700" fontSize="sm" w="100px">({bytesToSize(el.size)})</Text>
                <Text color="gray.700" fontSize="sm" isTruncated>
                  {el.name}
                </Text>
              </Flex>
            ))}
            <Button
              colorScheme="blue"
              bg="white"
              color="gray.700"
              borderWidth="1px"
              borderColor="gray.200"
              _hover={{bg: "blue.500", color: "white"}}
              _focus={{bg: "blue.500", color: "white"}}
              _active={{bg: "blue.500", color: "white"}}
              leftIcon={<Icon as={ImAttachment} />}
              onClick={() => fileInputReference.current.click()}
              justifyContent="start"
            >
                Upload Documents
            </Button>
            <input
              type="file"
              hidden
              ref={fileInputReference}
              onChange={handleFile}
            />
          </SimpleGrid>
        </Box>
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

export default Step5Gallery;
