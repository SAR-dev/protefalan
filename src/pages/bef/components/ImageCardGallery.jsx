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
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ImageCardGallery = ({ h = '250px', title, redirect }) => {
  const data = [
    {
      id: 1,
      title: 'Holiday Success Starts Here',
      desc: 'Head to our Holiday Hub for a head start this season.',
      image: 'https://i.imgur.com/ltgVgMe.png',
    },
    {
      id: 2,
      title: 'Introducung Subscriptions',
      desc: 'High-quality services on-repeat, hassle-free, every time.',
      image: 'https://i.imgur.com/8M7iy14.png',
    },
    {
      id: 3,
      title: 'Reach More Customers Online',
      desc: 'Engage online audiences with social media marketing techniques.',
      image: 'https://i.imgur.com/qeAQrjp.png',
    },
    {
      id: 4,
      title: 'Meet Digital Marketing Goals',
      desc: 'See your social ads bring traffic and results.',
      image: 'https://i.imgur.com/3KOaJWM.png',
    },
    {
      id: 5,
      title: 'Introducung Subscriptions',
      desc: 'High-quality services on-repeat, hassle-free, every time.',
      image: 'https://i.imgur.com/8M7iy14.png',
    },
    {
      id: 6,
      title: 'Reach More Customers Online',
      desc: 'Engage online audiences with social media marketing techniques.',
      image: 'https://i.imgur.com/qeAQrjp.png',
    },
  ];

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        {title}
      </Text>
      <SimpleGrid columns={3} spacing={10} w="100%">
        {data.map((el, i) => (
          <Box
            as={redirect && Link}
            d="block"
            to={redirect && `${redirect}/${el.id}`}
            w="100%"
            p={5}
            rounded="md"
            bg="white"
            _hover={{ bg: 'gray.100' }}
            borderWidth="1px"
            borderColor="gray.200"
            key={i}
          >
            <Image
              h={h}
              w="100%"
              rounded="md"
              objectFit="cover"
              src={el.image}
              mb={3}
            />
            <Text fontSize="xl" fontWeight="semibold">
              {el.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageCardGallery;
