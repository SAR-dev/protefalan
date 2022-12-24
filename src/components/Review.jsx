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
  Grid,
  GridItem,
  Avatar,
  Heading,
  HStack,
  Divider,
  Select,
  useToast
} from '@chakra-ui/react';
import { FaStar, FaRegUserCircle, FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { parseFromNow } from "../helpers";
import UpdateComment from './UpdateComment';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import { addDownvoteComment, addUpvoteComment, removeDownvoteComment, removeUpvoteComment } from '../api';
import { useQueryClient } from '@tanstack/react-query';

const Review = ({ review }) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  const [updating, setUpdating] = useState(false);
  const [data, setData] = useState(review);

  const upvote = () => {
    if (!data.upvoted) {
      addUpvoteComment(data.id).then((res) => {
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
            description: "Comment was upvoted.",
            status: "info",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
          setData({ ...data, upvoted: true, downvoted: false, num_vote_up: res.num_vote_up, num_vote_down: res.num_vote_down });
          queryClient.invalidateQueries(["gig_reviews", data.gig.toString()])
        }
      });
    } else {
      removeUpvoteComment(data.id).then((res) => {
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
          setData({ ...data, upvoted: false, num_vote_up: res.num_vote_up, num_vote_down: res.num_vote_down });
          queryClient.invalidateQueries(["gig_reviews", data.gig.toString()])
        }
      });
    }
  };

  const downvote = () => {
    if (!data.downvoted) {
      addDownvoteComment(data.id).then((res) => {
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
            description: "Comment was downvoted.",
            status: "info",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
          });
          setData({ ...data, upvoted: false, downvoted: true, num_vote_up: res.num_vote_up, num_vote_down: res.num_vote_down });
          queryClient.invalidateQueries(["gig_reviews", data.gig.toString()])
        }
      });
    } else {
      removeDownvoteComment(data.id).then((res) => {
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
          setData({ ...data, downvoted: false, num_vote_up: res.num_vote_up, num_vote_down: res.num_vote_down });
          queryClient.invalidateQueries(["gig_reviews", data.gig.toString()])
        }
      });
    }
  };

  return (
    <SimpleGrid columns={1} spacing={3}>
      <Flex alignItems="center">
        <Box w="70px" flexShrink="0">
          <Avatar src={review.author.avatar} name={`${review.author.first_name} ${review.author.last_name}`} />
        </Box>
        <SimpleGrid columns={1}>
          <Flex alignItems="center">
            <Text fontWeight="semibold" color="gray.700">
              {`${review.author.first_name} ${review.author.last_name}`}
            </Text>
            <Flex
              fontWeight="semibold"
              color="gray.500"
              alignItems="center"
              ml={2}
            >
              <Icon as={FaRegUserCircle} mr={1} />
              <Text>{review.author.username}</Text>
            </Flex>
          </Flex>
          {review.rating && (
            <Flex mt={1}>
              <Icon as={FaStar} h={5} w={5} color="yellow.400" />
              <Text ml={2} color="yellow.500">
                {review.rating}
              </Text>
            </Flex>
          )}
        </SimpleGrid>
      </Flex>
      <Box pl="70px">
        {updating ? (
          <UpdateComment comment={review} setUpdating={setUpdating} />
        ) : (
          <Text color="gray.700" whiteSpace="pre-wrap">
            {review.message}
          </Text>
        )}
      </Box>
      <HStack spacing={5} pl="70px">
        <Text color="gray.500">Published {parseFromNow(review.created_at)} ago</Text>
        {review.num_vote_up > 0 && (
          <Text color="gray.500">{review.num_vote_up} people found this helpful</Text>
        )}
        {review.num_vote_down > 0 && (
          <Text color="gray.500">{review.num_vote_down} people found this not helpful</Text>
        )}
      </HStack>
      <Flex pl="70px">
        <Flex alignItems="center" color="gray.700" cursor="pointer" _hover={{ color: "teal.500" }} mr={5}>
          <Icon as={FaRegThumbsUp} h={5} w={5} />
          <Text fontWeight="semibold" ml={1}>Helpful</Text>
        </Flex>
        <Flex alignItems="center" color="gray.700" cursor="pointer" _hover={{ color: "red.500" }} mr={5}>
          <Icon as={FaRegThumbsDown} h={5} w={5} />
          <Text fontWeight="semibold" ml={1}>Not Helpful</Text>
        </Flex>
        <Flex alignItems="center" color="gray.700" cursor="pointer" _hover={{ color: "blue.500" }} mr={5} onClick={() => setUpdating(!updating)}>
          <Icon as={BiMessageRoundedEdit} h={5} w={5} />
          <Text fontWeight="semibold" ml={1}>{updating ? "Cancel" : "Update"}</Text>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default Review;
