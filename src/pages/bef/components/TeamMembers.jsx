import React, { useState } from 'react';
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const TeamMembers = ({ heading, color }) => {
  const data = [
    {
      id: 1,
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B720%2C220%5D&w=1500&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg',
      name: 'Sayed Rafi',
      position: 'Founder & CEO',
      facebook: 'fb.com/rafi',
      twitter: 'fb.com/rafi',
      youtube: 'fb.com/rafi',
      linkedin: 'fb.com/rafi',
      instagram: 'fb.com/rafi',
    },
    {
      id: 2,
      image:
        'https://s.wsj.net/public/resources/images/BN-OO824_fblive_M_20160621141958.jpg',
      name: 'Zahin Mubassir',
      position: 'Founder & CEO',
      facebook: 'fb.com/rafi',
      twitter: 'fb.com/rafi',
      youtube: 'fb.com/rafi',
      linkedin: 'fb.com/rafi',
      instagram: 'fb.com/rafi',
    },
    {
      id: 3,
      image:
        'https://images.ctfassets.net/p0qf7j048i0q/C9E040C50A214CEFA1D7A84950DC14C6/e2dc149bae26778c0cd62d2abe76c5a6/AP242145094241.jpg?w=1000&h=750&fit=fill&fm=webp',
      name: 'Natsuki Rafi',
      position: 'Founder & CEO',
      facebook: 'fb.com/rafi',
      twitter: 'fb.com/rafi',
      youtube: 'fb.com/rafi',
      linkedin: 'fb.com/rafi',
      instagram: 'fb.com/rafi',
    },
    {
      id: 4,
      image:
        'https://images.wsj.net/im-391434?width=1280&size=1',
      name: 'Satsuki Kano',
      position: 'Founder & CEO',
      facebook: 'fb.com/rafi',
      twitter: 'fb.com/rafi',
      youtube: 'fb.com/rafi',
      linkedin: 'fb.com/rafi',
      instagram: 'fb.com/rafi',
    },
  ];

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={5} color={color}>
        {heading}
      </Text>
      <SimpleGrid columns={4} spacing={5}>
        {data.map((el, i) => (
          <Box
            w="100%"
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            rounded="md"
            p={5}
            key={i}
          >
            <Image
              src={el.image}
              w="100%"
              h="280px"
              objectFit="cover"
              rounded="md"
              mb={3}
            />
            <Text fontWeight="bold" fontSize="xl">
              {el.name}
            </Text>
            <Text mb={1}>{el.position}</Text>
            <Flex>
              {el.facebook.length !== 0 && (
                <ChakraLink
                  bg="#1877f2"
                  display="flex"
                  h={6}
                  w={6}
                  justifyContent="center"
                  alignItems="center"
                  rounded="full"
                  isExternal
                  href={el.facebook}
                  mr={3}
                >
                  <Icon h={3} w={3} as={FaFacebook} color="white" />
                </ChakraLink>
              )}
              {el.twitter.length !== 0 && (
                <ChakraLink
                  bg="#657786"
                  display="flex"
                  h={6}
                  w={6}
                  justifyContent="center"
                  alignItems="center"
                  rounded="full"
                  isExternal
                  href={el.twitter}
                  mr={3}
                >
                  <Icon h={3} w={3} as={FaTwitter} color="white" />
                </ChakraLink>
              )}
              {el.youtube.length !== 0 && (
                <ChakraLink
                  bg="#ff0000"
                  display="flex"
                  h={6}
                  w={6}
                  justifyContent="center"
                  alignItems="center"
                  rounded="full"
                  isExternal
                  href={el.youtube}
                  mr={3}
                >
                  <Icon h={3} w={3} as={FaYoutube} color="white" />
                </ChakraLink>
              )}
              {el.linkedin.length !== 0 && (
                <ChakraLink
                  bg="#0077b5"
                  display="flex"
                  h={6}
                  w={6}
                  justifyContent="center"
                  alignItems="center"
                  rounded="full"
                  isExternal
                  href={el.linkedin}
                  mr={3}
                >
                  <Icon h={3} w={3} as={FaLinkedin} color="white" />
                </ChakraLink>
              )}
              {el.instagram.length !== 0 && (
                <ChakraLink
                  bg="#e1306c"
                  display="flex"
                  h={6}
                  w={6}
                  justifyContent="center"
                  alignItems="center"
                  rounded="full"
                  isExternal
                  href={el.instagram}
                >
                  <Icon h={3} w={3} as={FaInstagram} color="white" />
                </ChakraLink>
              )}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamMembers;
