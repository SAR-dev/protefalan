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
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const PopupVideoPlayer = ({ h = '320px' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = {
    title: 'Company Introduction',
    thumbnail:
      'https://ppchubbub.com/wp-content/uploads/2017/02/Screen-Shot-2017-02-08-at-21.23.34.png',
    video: 'https://www.youtube.com/watch?v=7G4rT4EX2qU',
  };
  return (
    <>
      <Box h={h} w="100%" pos="relative" className="flip-card">
        <Box className="flip-card-inner">
          <Box className="flip-card-front">
            <Image
              h={h}
              w="100%"
              rounded="md"
              objectFit="cover"
              src={data.thumbnail}
            />
          </Box>
          <Box className="flip-card-back">
            <Flex
              h={h}
              w="100%"
              justifyContent="center"
              alignItems="center"
              rounded="md"
              bg="blue.500"
            >
              <Button
                size="lg"
                leftIcon={<Icon as={FaPlay} />}
                onClick={onOpen}
              >
                Play Video
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        isCentered
        size="3xl"
      >
        <ModalOverlay style={{ backdropFilter: 'blur(5px)' }} />
        <ModalContent>
          <ModalHeader>{data.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="100%" pb={5}>
              <ReactPlayer url={data.video} width="100%" controls={true} playing={true} />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopupVideoPlayer;
