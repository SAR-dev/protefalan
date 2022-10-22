import React from 'react';
import {
  Flex,
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
  Avatar,
} from '@chakra-ui/react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { RiPlayListAddFill } from 'react-icons/ri';
import {Link} from "react-router-dom";

const SellerCard = () => {
    const data = {
        id: 1,
        author: {
            name: "Sayed Rafi",
            avatar: "https://i.imgur.com/8oKUFw6.png"
        },
        cover: "https://analyticsindiamag.com/wp-content/uploads/2021/01/pasted-image-0-2.png",
        desc: "I will create a responsive website with tailwind CSS and alpine js",
        rating: 4.61,
        votes: 65
    }
  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderColor="gray.200"
      rounded="md"
      overflow="hidden"
      bg="white"
    >
      <Box h="150px" w="100%" bg="gray.200" overflow="hidden">
        <Image
          h="150px"
          w="100%"
          objectFit="cover"
          src={data.cover}
          _hover={{transform: "scale(1.1)"}}
          transition="transform .25s ease"
        />
      </Box>
      <SimpleGrid columns={1} spacing={3} p={4}>
        <Flex alignItems="center" w="100%">
          <Avatar src={data.author.avatar} name={data.author.name} h="40px" w="40px" />
          <SimpleGrid ml={3} columns={1} fontWeight="semibold">
            <Text color="gray.700">
              {data.author.name}
            </Text>
            <Text color="gray.400" fontSize="sm">Level 1 Seller</Text>
          </SimpleGrid>
        </Flex>
        <Text noOfLines={2} color="gray.700" as={Link} to="/gig" _hover={{color: "teal.500"}}>
          {data.desc}
        </Text>
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Icon as={FaStar} h={5} w={5} color="yellow.500" />
            <Text color="yellow.500" fontWeight="semibold" ml={2}>
              {data.rating}
            </Text>
            <Text color="gray.500" fontWeight="semibold" ml={2}>
              ({data.votes})
            </Text>
          </Flex>
          <Flex ml="auto">
            <Icon cursor="pointer" _hover={{color: "gray.600"}} as={RiPlayListAddFill} h={5} w={5} color="gray.500" />
            <Icon cursor="pointer" _hover={{color: "gray.600"}} as={FaHeart} h={5} w={5} color="gray.500" ml={4} />
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default SellerCard;
