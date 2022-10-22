import React, { useState } from 'react';
import {
  Box,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const ImageCardCarousel = ({ h = '320px', items = 5, heading }) => {
  const data = [
    {
      id: 1,
      title: 'Main Heading',
      desc: 'Small detailed Explanation',
      image: 'https://i.imgur.com/ltgVgMe.png',
    },
    {
      id: 2,
      title: 'Main Heading',
      desc: 'Small detailed Explanation',
      image: 'https://i.imgur.com/8M7iy14.png',
    },
    {
      id: 3,
      title: 'Main Heading',
      desc: 'Small detailed Explanation',
      image: 'https://i.imgur.com/qeAQrjp.png',
    },
    {
      id: 4,
      title: 'Main Heading',
      desc: 'Small detailed Explanation',
      image: 'https://i.imgur.com/3KOaJWM.png',
    },
    {
      id: 5,
      title: 'Main Heading',
      desc: 'Small detailed Explanation',
      image: 'https://i.imgur.com/ltgVgMe.png',
    },
    {
      id: 6,
      title: 'Main Heading',
      desc: 'Small detailed Explanation',
      image: 'https://i.imgur.com/8M7iy14.png',
    },
    {
      id: 7,
      title: 'Main Heading',
      desc: 'Small detailed Explanation',
      image: 'https://i.imgur.com/qeAQrjp.png',
    },
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        {heading}
      </Text>
      <Box h={h} w="100%" overflow="hidden" role="group">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          gutter={15}
          numberOfCards={items}
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
          {data.map((el, i) => (
            <Box
              h={h}
              w="100%"
              pos="relative"
              rounded="md"
              bg="black"
              _hover={{ opacity: '0.9' }}
              as={Link}
              display="block"
              key={i}
            >
              <Image
                src={el.image}
                w="100%"
                h="100%"
                objectFit="cover"
                opacity="0.85"
                rounded="md"
              />
              <Box pos="absolute" top="0" left="0" p={3}>
                <Text color="white" fontSize="sm">
                  {el.title}
                </Text>
                <Text color="white" fontSize="xl" fontWeight="semibold">
                  {el.desc}
                </Text>
              </Box>
            </Box>
          ))}
        </ItemsCarousel>
      </Box>
    </Box>
  );
};

export default ImageCardCarousel;
