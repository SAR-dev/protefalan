import React from "react";
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
} from "@chakra-ui/react";
import { FaHeart, FaStar, FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineThumbUpAlt, MdOutlineThumbDownAlt, MdThumbUp, MdThumbDown } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SellerCard = ({ gig }) => {
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
          src={gig.images.length !== 0 ? gig.images[0].image : "https://i.ibb.co/TqqwjtR/image.png"}
          _hover={{ transform: "scale(1.1)" }}
          transition="transform .25s ease"
        />
      </Box>
      <SimpleGrid columns={1} spacing={3} p={4}>
        <Flex alignItems="center" w="100%">
          <Avatar
            src={gig.author.avatar}
            name={`${gig.author.first_name} ${gig.author.last_name}`}
            h="40px"
            w="40px"
          />
          <SimpleGrid ml={3} columns={1} fontWeight="semibold">
            <Text color="gray.700">
              {`${gig.author.first_name} ${gig.author.last_name}`}
            </Text>
            <Text color="gray.400" fontSize="sm">
              {`@${gig.author.username}`}
            </Text>
          </SimpleGrid>
        </Flex>
        <Text
          noOfLines={2}
          color="gray.700"
          as={Link}
          to="/gig/1"
          _hover={{ color: "teal.500" }}
        >
          {gig.title}
        </Text>
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Icon as={FaStar} h={5} w={5} color="yellow.500" />
            <Text color="yellow.500" fontWeight="semibold" ml={2}>
              {gig.average_rating.rating__avg
                ? gig.average_rating.rating__avg
                : 0}
            </Text>
            <Text color="gray.500" fontWeight="semibold" ml={2}>
              ({gig.total_ratings})
            </Text>
          </Flex>
          <Flex ml="auto" alignItems="center">
            <Text color="gray.500" fontSize={20} fontWeight="semibold">
              {gig.num_vote_down}
            </Text>
            <Icon
              cursor="pointer"
              _hover={{ color: "gray.600" }}
              as={gig.downvoted ? MdThumbDown : MdOutlineThumbDownAlt}
              w={5}
              h={5}
              color={gig.upvoted ? "red.500" : "gray.500"}
              ml={1}
            />
          </Flex>
          <Flex ml={3} alignItems="center">
            <Text color="gray.500" fontSize={20} fontWeight="semibold">
              {gig.num_vote_up}
            </Text>
            <Icon
              cursor="pointer"
              _hover={{ color: "gray.600" }}
              as={gig.upvoted ? MdThumbUp : MdOutlineThumbUpAlt}
              w={5}
              h={5}
              color={gig.upvoted ? "red.500" : "gray.500"}
              ml={1}
            />
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default SellerCard;
