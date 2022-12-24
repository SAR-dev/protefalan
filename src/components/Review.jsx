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
  useToast,
  Spinner
} from '@chakra-ui/react';
import { FaStar, FaRegUserCircle, FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { parseFromNow } from "../helpers";
import UpdateComment from './UpdateComment';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import { addDownvoteComment, addUpvoteComment, removeDownvoteComment, removeUpvoteComment } from '../api';
import { useQueryClient } from '@tanstack/react-query';

const Review = ({ review }) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false)

  const [updating, setUpdating] = useState(false);
  const [data, setData] = useState(review);

  const upvote = () => {
    setLoading(true)
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
          setLoading(false)
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
          setLoading(false)
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
          setLoading(false)
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
          setLoading(false)
        }
      });
    }
  };

  const downvote = () => {
    setLoading(true)
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
          setLoading(false)
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
          setLoading(false)
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
          setLoading(false)
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
          setLoading(false)
        }
      });
    }
  };

  return (
    <SimpleGrid columns={1} spacing={3}>
      <Flex alignItems="center">
        <Box w="70px" flexShrink="0">
          <Avatar src={data.author.avatar} name={`${data.author.first_name} ${data.author.last_name}`} />
        </Box>
        <SimpleGrid columns={1}>
          <Flex alignItems="center">
            <Text fontWeight="semibold" color="gray.700">
              {`${data.author.first_name} ${data.author.last_name}`}
            </Text>
            <Flex
              fontWeight="semibold"
              color="gray.500"
              alignItems="center"
              ml={2}
            >
              <Icon as={FaRegUserCircle} mr={1} />
              <Text>{data.author.username}</Text>
            </Flex>
          </Flex>
          {data.rating && (
            <Flex mt={1}>
              <Icon as={FaStar} h={5} w={5} color="yellow.400" />
              <Text ml={2} color="yellow.500">
                {data.rating}
              </Text>
            </Flex>
          )}
        </SimpleGrid>
      </Flex>
      <Box pl="70px">
        {updating ? (
          <UpdateComment comment={data} setUpdating={setUpdating} />
        ) : (
          <Text color="gray.700" whiteSpace="pre-wrap">
            {data.message}
          </Text>
        )}
      </Box>
      <HStack spacing={5} pl="70px">
        <Text color="gray.500">Published {parseFromNow(data.created_at)} ago</Text>
        {data.num_vote_up > 0 && (
          <Text color="gray.500">{data.num_vote_up} people found this helpful</Text>
        )}
        {data.num_vote_down > 0 && (
          <Text color="gray.500">{data.num_vote_down} people found this not helpful</Text>
        )}
      </HStack>
      <Flex pl="70px">
        <Flex alignItems="center" color="gray.700" cursor="pointer" _hover={{ color: "teal.500" }} mr={5} onClick={upvote}>
          {loading ? <Spinner size="sm" /> : (
            <Icon as={data.upvoted? FaThumbsUp : FaRegThumbsUp} h={5} w={5} />
          )}
          <Text fontWeight="semibold" ml={1}>{data.upvoted && "Found"} Helpful</Text>
        </Flex>
        <Flex alignItems="center" color="gray.700" cursor="pointer" _hover={{ color: "red.500" }} mr={5} onClick={downvote}>
          {loading ? <Spinner size="sm" /> : (
            <Icon as={data.downvoted ? FaThumbsDown : FaRegThumbsDown} h={5} w={5} />
          )}
          <Text fontWeight="semibold" ml={1}>{data.downvoted && "Found"} Not Helpful</Text>
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
