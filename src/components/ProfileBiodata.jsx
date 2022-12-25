import { useState } from 'react';
import {
  Flex,
  Box,
  Button,
  Icon,
  Text,
  SimpleGrid,
  Avatar,
  Heading,
  HStack,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaFacebook, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { MdPlace, MdDateRange, MdPeople, MdCastForEducation } from 'react-icons/md';
import { SlBadge } from "react-icons/sl"
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, follow, unfollow } from '../api';
import { parseText } from '../helpers';
import { useParams } from 'react-router-dom';

const ProfileBioData = () => {
  const { username } = useParams();
  const [submitting, setSubmitting] = useState(false)
  const toast = useToast();
  const queryClient = useQueryClient();

  const [following, setFollowing] = useState(false);
  const [followers_count, setFollowersCount] = useState(0);

  const { status, data, error, isFetching, isLoading, isError } = useQuery(["profile", username], () => getProfile(username), {
    enabled: username !== undefined,
    onSuccess: (res) => {
      setFollowing(res.following)
      setFollowersCount(res.followers_count)
    }
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return (
      <Text color="red.500">
        {error.message}
      </Text>
    )
  }

  const getFullStar = score => {
    return Math.floor(score);
  };

  const getNullStar = score => {
    return 5 - Math.round(score);
  };

  const hasHalfStar = score => {
    return (score - Math.floor(score)) > 0
  };

  const submitFollow = () => {
    setSubmitting(true)
    if (data.following) {
      unfollow(username)
        .then((res) => {
          if (res.error) {
            setSubmitting(false);
            toast({
              title: "Unfollow failed.",
              description: res.error.detail,
              status: "error",
              position: "bottom-left",
              duration: 9000,
              isClosable: true,
            });
            setFollowing(res.following);
            setFollowersCount(res.followers_count)
            queryClient.invalidateQueries(["profile", username])
          } else {
            setSubmitting(false);
            toast({
              title: "Follow removed.",
              description: `You are not following ${data.author.first_name} ${data.author.last_name} anymore`,
              status: "info",
              position: "bottom-left",
              duration: 9000,
              isClosable: true,
            });
            setFollowing(res.following);
            setFollowersCount(res.followers_count)
            queryClient.invalidateQueries(["profile", username])
          }
        })
    } else {
      follow(username)
        .then((res) => {
          if (res.error) {
            setSubmitting(false);
            toast({
              title: "Follow failed.",
              description: res.error.detail,
              status: "error",
              position: "bottom-left",
              duration: 9000,
              isClosable: true,
            });
            setFollowing(res.following);
            setFollowersCount(res.followers_count)
            queryClient.invalidateQueries(["profile", username])
          } else {
            setSubmitting(false);
            toast({
              title: "Follow added.",
              description: `You are now following ${data.author.first_name} ${data.author.last_name}`,
              status: "info",
              position: "bottom-left",
              duration: 9000,
              isClosable: true,
            });
            setFollowing(res.following);
            setFollowersCount(res.followers_count)
            queryClient.invalidateQueries(["profile", username])
          }
        })
    }
  }

  return (
    <>
      <Box
        p={5}
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        textAlign="center"
        pos="relative"
      >
        {submitting ? (
          <Spinner
            m={5} pos="absolute"
            top="0"
            right="0"
            size="md"
          />) : (
          <Icon
            m={5}
            cursor="pointer"
            _hover={{ color: following ? "gray.500" : "pink.500" }}
            as={FaHeart}
            h={5}
            w={5}
            color={following ? "pink.500" : "gray.500"}
            pos="absolute"
            top="0"
            right="0"
            onClick={submitFollow}
          />
        )}
        <Box
          p={2}
          d="inline-block"
          borderWidth="5px"
          borderColor="teal.500"
          rounded="full"
        >
          <Avatar size="2xl" src={data.author.avatar} name={`${data.author.first_name} ${data.author.last_name}`} />
        </Box>
        <Heading fontSize="2xl" mt={3}>
          {`${data.author.first_name} ${data.author.last_name}`}
        </Heading>
        <Text fontWeight="semibold" color="gray.700" mt={1}>
          f/{data.author.username}
        </Text>
        <Text color="gray.500" mt={1}>
          {data.author.quote}
        </Text>
        <Box my={5}>
          <Flex justifyContent="center" alignItems="center">
            <HStack spacing={2}>
              {[...Array(Math.floor(getFullStar(data.author.average_rating.rating__avg)))].map(
                (el, i) => (
                  <Icon as={FaStar} h={4} w={4} color="yellow.400" key={i} />
                )
              )}
              {hasHalfStar(data.author.average_rating.rating__avg) && (
                <Icon as={FaStarHalfAlt} h={4} w={4} color="yellow.400" />
              )}
              {[...Array(getNullStar(Math.ceil(data.author.average_rating.rating__avg)))].map((el, i) => (
                <Icon as={FaRegStar} h={4} w={4} color="gray.400" key={i} />
              ))}
            </HStack>
          </Flex>
          <Flex justifyContent="center" mt={1}>
            <Text fontWeight="semibold">{data.author.average_rating.rating__avg}</Text>
            <Text color="gray.500" ml={1}>
              ({data.author.total_ratings} Reviews)
            </Text>
          </Flex>
        </Box>
        <SimpleGrid columns={2} spacing={3}>
          <Button colorScheme="blue" size="sm" onClick={() => window.location = `mailto:${data.contact_email}`}>
            Email Me
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.location = `tel:${data.contact_number}`}>
            Call Me
          </Button>
        </SimpleGrid>
        <Box w="100%" h="1px" bg="gray.200" my={5} />
        <SimpleGrid columns={1} spacing={3} color="gray.700">
          <Flex alignItems="center">
            <Icon as={MdPlace} h={5} w={5} />
            <Text ml={2}>From</Text>
            <Text ml="auto" fontWeight="semibold">
              {data.location}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={MdDateRange} h={5} w={5} />
            <Text ml={2}>Member Since</Text>
            <Text ml="auto" fontWeight="semibold">
              {(new Date(data.author.date_joined).toLocaleString('default', { month: 'short', year: 'numeric' }))}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={MdPeople} h={5} w={5} />
            <Text ml={2}>Followers</Text>
            <Text ml="auto" fontWeight="semibold">
              {followers_count}
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box
        p={5}
        borderWidth="1px"
        borderColor="gray.200"
        rounded="md"
        textAlign="center"
      >
        <SimpleGrid columns={1} spacing={5}>
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Description
            </Text>
            <Text color="gray.500">
              {data.bio}
            </Text>
          </Box>
          <Box w="100%" h="1px" bg="gray.200" />
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Languages
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              {data.languages.map((el, i) => (
                <Flex color="gray.700" key={i}>
                  <Text>{parseText(el)}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
          <Box w="100%" h="1px" bg="gray.200" />
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Linked Accounts
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              {data.facebook && (
                <Flex
                  color="gray.500"
                  alignItems="center"
                  as={ChakraLink}
                  _focus={{ boxShadow: 'none' }}
                  href={data.facebook}
                  isExternal
                >
                  <Icon as={FaFacebook} h={5} w={5} mr={2} color="#1877f2" />
                  Facebook
                </Flex>
              )}
              {data.twitter && (
                <Flex
                  color="gray.500"
                  alignItems="center"
                  as={ChakraLink}
                  _focus={{ boxShadow: 'none' }}
                  href={data.twitter}
                  isExternal
                >
                  <Icon as={FaTwitter} h={5} w={5} mr={2} color="#1da1f2" />
                  Twitter
                </Flex>
              )}
              {data.github && (
                <Flex
                  color="gray.500"
                  alignItems="center"
                  as={ChakraLink}
                  _focus={{ boxShadow: 'none' }}
                  href={data.github}
                  isExternal
                >
                  <Icon as={FaGithub} h={5} w={5} mr={2} color="#333333" />
                  Github
                </Flex>
              )}
            </SimpleGrid>
          </Box>
          <Box w="100%" h="1px" bg="gray.200" />
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Education
            </Text>
            <SimpleGrid columns={1} spacing={2} >
              {data.educations.map((el, i) => (
                <Text color="gray.500" key={i}>
                  <Icon as={MdCastForEducation} style={{ marginRight: 5 }} />
                  {parseText(el)}
                </Text>
              ))}
            </SimpleGrid>
          </Box>
          <Box w="100%" h="1px" bg="gray.200" />
          <Box textAlign="left">
            <Text mb={3} fontWeight="semibold" color="gray.700">
              Certifications
            </Text>
            <SimpleGrid columns={1} spacing={2}>
              {data.certifications.map((el, i) => (
                <Text color="gray.500" key={i}>
                  <Icon as={SlBadge} style={{ marginRight: 5 }} />
                  {parseText(el)}
                </Text>
              ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ProfileBioData;
