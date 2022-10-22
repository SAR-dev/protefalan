import React, { useState } from 'react';
import {
  Box,
  Icon,
  IconButton,
  Image,
  Text,
  Flex,
  HStack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import ItemsCarousel from 'react-items-carousel';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Lightbox } from 'react-modal-image';

const GigImageCarousel = ({ images }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = src => {
    setModal(true);
    setModalImage(src);
  };

  const closeModal = () => {
    setModal(false);
    setModalImage('');
  };

  return (
    <>
      <Box w="100%" overflow="hidden" role="group">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          leftChevron={
            <IconButton
              opacity="0"
              _groupHover={{ opacity: 1 }}
              rounded="full"
              boxShadow="md"
              ml={2}
              icon={<Icon as={AiOutlineArrowLeft} />}
            />
          }
          rightChevron={
            <IconButton
              opacity="0"
              _groupHover={{ opacity: 1 }}
              rounded="full"
              boxShadow="md"
              mr={2}
              icon={<Icon as={AiOutlineArrowRight} />}
            />
          }
        >
          {images.map((el, i) => (
            <Box w="100%" pos="relative" bg="bg.white" overflow="hidden" key={i}>
              <Image
                h="320px"
                w="100%"
                rounded="md"
                objectFit="cover"
                src={el.image}
                _hover={{transform: "scale(1.1)"}}
                transition="transform .25s ease"
              />
              <Flex
                pos="absolute"
                bottom="0"
                right="0"
                w="100%"
                p={2}
                justifyContent="center"
              >
                <Button
                  size="xs"
                  bg="gray.700"
                  color="white"
                  _hover={{ opacity: 1 }}
                  _focus={{ opacity: 1 }}
                  _active={{ opacity: 1 }}
                  onClick={() => openModal(el.image)}
                  opacity="0.5"
                  w="80px"
                  py={3}
                  d="none"
                  _groupHover={{ d: 'flex' }}
                >
                  Full Screen
                </Button>
              </Flex>
            </Box>
          ))}
        </ItemsCarousel>
      </Box>
      <HStack mt={2} spacing={2}>
        {images.map((el, i) => (
          <Box
            w="100px"
            borderWidth="3px"
            borderColor={activeItemIndex === i ? 'blue.400' : 'transparent'}
            rounded="md"
            overflow="hidden"
            cursor="pointer"
            onClick={() => setActiveItemIndex(i)}
            key={i}
          >
            <Image
              h="60px"
              w="100%"
              overflow="hidden"
              objectFit="cover"
              rounded={activeItemIndex !== i && 'md'}
              src={el.image}
            />
          </Box>
        ))}
      </HStack>

      {modal && (
        <Lightbox
          small={modalImage}
          large={modalImage}
          onClose={() => closeModal()}
        />
      )}
    </>
  );
};

export default GigImageCarousel;
