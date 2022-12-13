import {
  Flex,
  Box,
  Icon,
  Image,
  Text,
  SimpleGrid,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import {
  MdOutlineThumbUpAlt,
  MdOutlineThumbDownAlt,
  MdThumbUp,
  MdThumbDown,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { addUpvoteGig, removeUpvoteGig, addDownvoteGig, removeDownvoteGig } from "../api";
import { useQueryClient } from "@tanstack/react-query";

const SellerCard = ({ gig, categoryId }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const upvote = () => {
    if (!gig.upvoted) {
      addUpvoteGig(gig.id).then((res) => {
        if (res.error) {
          toast({
            title: "Vote failed!",
            description: res.error.detail,
            status: "error",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Upvoted!",
            description: "Gig was upvoted.",
            status: "info",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
          const oldQueryData = queryClient.getQueryData(["feed"]);
          const newQueryData = oldQueryData;
          const foundCategoryIndex = newQueryData.results.findIndex(
            (e) => e.id === categoryId
          );
          const foundGigIndex = newQueryData.results[
            foundCategoryIndex
          ].gigs.findIndex((e) => e.id === gig.id);
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].upvoted = true;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].downvoted = false;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].num_vote_up = res.num_vote_up;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].num_vote_down = res.num_vote_down;
          queryClient.setQueryData(["feed"], (oldData) => {
            return { ...oldData, ...newQueryData };
          });
        }
      });
    } else {
      removeUpvoteGig(gig.id).then((res) => {
        if (res.error) {
          toast({
            title: "Vote failed.",
            description: res.error.detail,
            status: "error",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Upvoted!",
            description: "Upvote removed.",
            status: "info",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
          const oldQueryData = queryClient.getQueryData(["feed"]);
          const newQueryData = oldQueryData;
          const foundCategoryIndex = newQueryData.results.findIndex(
            (e) => e.id === categoryId
          );
          const foundGigIndex = newQueryData.results[
            foundCategoryIndex
          ].gigs.findIndex((e) => e.id === gig.id);
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].upvoted = false;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].num_vote_up = res.num_vote_up;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].num_vote_down = res.num_vote_down;
          queryClient.setQueryData(["feed"], (oldData) => {
            return { ...oldData, ...newQueryData };
          });
        }
      });
    }
  };

  const downvote = () => {
    if (!gig.downvoted) {
      addDownvoteGig(gig.id).then((res) => {
        if (res.error) {
          toast({
            title: "Vote failed.",
            description: res.error.detail,
            status: "error",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Downvoted!",
            description: "Gig was downvoted.",
            status: "info",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
          const oldQueryData = queryClient.getQueryData(["feed"]);
          const newQueryData = oldQueryData;
          const foundCategoryIndex = newQueryData.results.findIndex(
            (e) => e.id === categoryId
          );
          const foundGigIndex = newQueryData.results[
            foundCategoryIndex
          ].gigs.findIndex((e) => e.id === gig.id);
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].downvoted = true;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].upvoted = false;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].num_vote_up = res.num_vote_up;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].num_vote_down = res.num_vote_down;
          queryClient.setQueryData(["feed"], (oldData) => {
            return { ...oldData, ...newQueryData };
          });
        }
      });
    } else {
      removeDownvoteGig(gig.id).then((res) => {
        if (res.error) {
          toast({
            title: "Vote failed.",
            description: res.error.detail,
            status: "error",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Downvoted!",
            description: "Downvote removed.",
            status: "info",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
          const oldQueryData = queryClient.getQueryData(["feed"]);
          const newQueryData = oldQueryData;
          const foundCategoryIndex = newQueryData.results.findIndex(
            (e) => e.id === categoryId
          );
          const foundGigIndex = newQueryData.results[
            foundCategoryIndex
          ].gigs.findIndex((e) => e.id === gig.id);
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].downvoted = false;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].num_vote_up = res.num_vote_up;
          newQueryData.results[foundCategoryIndex].gigs[foundGigIndex].num_vote_down = res.num_vote_down;
          queryClient.setQueryData(["feed"], (oldData) => {
            return { ...oldData, ...newQueryData };
          });
        }
      });
    }
  };

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
          src={
            gig.images.length !== 0
              ? gig.images[0].image
              : "https://i.ibb.co/TqqwjtR/image.png"
          }
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
              color={gig.downvoted ? "blue.500" : "gray.500"}
              ml={1}
              onClick={downvote}
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
              color={gig.upvoted ? "blue.500" : "gray.500"}
              ml={1}
              onClick={upvote}
            />
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default SellerCard;
