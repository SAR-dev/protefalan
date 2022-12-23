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
  Spinner,
  TableCaption,
  Link,
  useToast
} from '@chakra-ui/react';
import { RiImageAddFill, RiVideoAddLine, RiFolderHistoryLine } from 'react-icons/ri';
import ReactPlayer from 'react-player'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { imageUploader } from "../api";
import { MdDelete } from 'react-icons/md';

const Step5Gallery = ({ images, setImages, videos, setVideos, documents, setDocuments, save }) => {
  const [video, setVideo] = useState('');
  const [document, setDocument] = useState('');
  const toast = useToast()
  const [uploading, setUploading] = useState(false);

  const imageInputReference = createRef();
  const imageExtensions = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/bmp',
    'image/tif',
    'image/tiff',
    'image/webp',
  ];
  function handleImage(event) {
    if (
      event.target.files[0] &&
      imageExtensions.includes(event.target.files[0].type)
    ) {
      setUploading(true)
      imageUploader(event.target.files[0]).then(res => {
        if (res.error) {
          setUploading(false)
          toast({
            title: "Upload failed.",
            description: res.error.detail,
            status: "error",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
        } else {
          setUploading(false)
          setImages(prevState => [...prevState, res.data]);
        }
      })
    } else {
      toast({
        title: "Upload failed.",
        description: "Only these extensions are allowed - " + imageExtensions.join(", "),
        status: "error",
        position: "bottom-left",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  const removeImage = (i) => {
    const t = images;
    t.splice(i, 1)
    setImages([...t])
  }

  const addVideo = () => {
    setVideos(prevState => [...prevState, video]);
    setVideo('')
  }

  const removeVideo = (i) => {
    const t = videos;
    t.splice(i, 1)
    setVideos([...t])
  }

  const addDocument = () => {
    setDocuments(prevState => [...prevState, document]);
    setDocument('')
  }

  const removeDocument = (i) => {
    const t = documents;
    t.splice(i, 1)
    setDocuments([...t])
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
                  src={el.image}
                />
                <Button mt={1} variant="outline" size="xs" w="100%" onClick={() => removeImage(i)}>Delete</Button>
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
              disabled={uploading}
              _hover={{ bg: "blue.500", color: "white" }}
              _focus={{ bg: "blue.500", color: "white" }}
              _active={{ bg: "blue.500", color: "white" }}
              icon={uploading ? <Spinner size="lg" /> : <Icon as={RiImageAddFill} h={16} w={16} />}
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
          <SimpleGrid columns={3} spacing={5} mb={videos.length !== 0 ? 5 : 0}>
            {videos.map((el, i) => (
              <Box
                w="100%"
                rounded="md"
                key={i}
              >
                <ReactPlayer width="100%" height="150px" url={el} />
                <Button mt={1} variant="outline" size="xs" w="100%" onClick={() => removeVideo(i)}>Delete</Button>
              </Box>
            ))}
          </SimpleGrid>
          <Flex>
            <Input placeholder='Add video link' mr={2} value={video} onChange={(e) => setVideo(e.target.value)} />
            <Button colorScheme="blue" onClick={() => addVideo()}>Save</Button>
          </Flex>
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
          <SimpleGrid columns={1} spacing={5} mb={documents.length !== 0 ? 5 : 0}>
            {documents.map((el, i) => (
              <Flex w="100%" key={i}>
              <Link href={el} px={5} py={3} d="flex" rounded="md" alignItems="center" w="100%" bg="gray.200" isExternal key={i}>
                <Text noOfLines={1}>{el}</Text> <ExternalLinkIcon ml='2px' />
              </Link>
              <IconButton icon={<MdDelete />} ml={1} h="100%" variant="outline" onClick={() => removeDocument(i)} />
              </Flex>
            ))}
            <Flex>
              <Input placeholder='Add document link' mr={2} value={document} onChange={(e) => setDocument(e.target.value)} />
              <Button colorScheme="blue" onClick={() => addDocument()}>Save</Button>
            </Flex>
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
