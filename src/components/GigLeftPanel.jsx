import { Flex, Box, Button, Icon, Text, SimpleGrid, Avatar, HStack } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import GigImageCarousel from './GigImageCarousel';
import parse from 'html-react-parser';
import PackageCompare from './PackageCompare';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';
import { parseText } from '../helpers'
import { getGigsByAuthor } from '../api'
import { useQuery } from '@tanstack/react-query';

const GigLeftPanel = ({ gig }) => {
  const { status, data, error, isFetching, isLoading, isError } = useQuery(["recommendation", gig.author.username], () => getGigsByAuthor(gig.author.username), {
    enabled: gig !== undefined
  })

  const getFullStar = score => {
    return Math.floor(score);
  };

  const getNullStar = score => {
    return 5 - Math.round(score);
  };

  const hasHalfStar = score => {
    return (score - Math.floor(score)) > 0
  };

  if(isLoading || !data){
    return <></>
  }
  
  return <>
    <Flex alignItems="center">
      <Text
        as={Link}
        color={gig.category.color}
        _hover={{ color: 'blue.600' }}
        fontWeight="semibold"
      >
        {gig.category.name}
      </Text>
    </Flex>
    <Text fontSize="3xl" fontWeight="semibold" color="gray.700">
      {gig.title}
    </Text>
    <Flex my={5} alignItems="center">
      <Avatar src={gig.author.avatar} name={`${gig.author.first_name} ${gig.author.last_name}`} size="sm" />
      <Text fontWeight="bold" color="gray.700" ml={3}>
        {`${gig.author.first_name} ${gig.author.last_name}`}
      </Text>
      <Text fontWeight="bold" color="gray.700" mx={3}>
        |
      </Text>
      {gig.author.average_rating && (
        <HStack spacing={1}>
          {[...Array(Math.floor(getFullStar(gig.average_rating.rating__avg)))].map(
            (el, i) => (
              <Icon as={FaStar} h={4} w={4} color="yellow.400" key={i} />
            )
          )}
          {hasHalfStar(gig.average_rating.rating__avg) && (
            <Icon as={FaStarHalfAlt} h={4} w={4} color="yellow.400" />
          )}
          {[...Array(getNullStar(Math.ceil(gig.average_rating.rating__avg)))].map((el, i) => (
            <Icon as={FaRegStar} h={4} w={4} color="gray.400" key={i} />
          ))}
        </HStack>
      )}
      {gig.average_rating && (
        <Text color="yellow.400" fontWeight="bold" ml={2}>
          {gig.average_rating.rating__avg}
        </Text>
      )}
      {gig.total_ratings && (
        <Text color="gray.500" fontWeight="semibold" ml={2}>
          ({gig.total_ratings})
        </Text>
      )}
    </Flex>
    <GigImageCarousel images={gig.images} />
    <Box my={10}>
      <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
        About This Gig
      </Text>
      <Box className="post-content" color="gray.700">
        {parse(gig.description)}
      </Box>
    </Box>
    <Flex
      justifyContent="space-between"
      py={5}
      borderTopWidth="1px"
      borderTopColor="gray.200"
    >
      {gig.languages && gig.languages.length !== 0 && (
        <Box color="gray.700">
          <Text fontWeight="semibold" mb={2}>
            Languages
          </Text>
          {gig.languages.map((text, i) => (
            <Text key={i}>{parseText(text)}</Text>
          ))}
        </Box>
      )}
      {gig.expertises && gig.expertises.length !== 0 && (
        <Box color="gray.700">
          <Text fontWeight="semibold" mb={2}>
            Expertises
          </Text>
          {gig.expertises.map((text, i) => (
            <Text key={i}>{parseText(text)}</Text>
          ))}
        </Box>
      )}
      {gig.specializations && gig.specializations.length !== 0 && (
        <Box color="gray.700">
          <Text fontWeight="semibold" mb={2}>
            Specializations
          </Text>
          {gig.specializations.map((text, i) => (
            <Text key={i}>{parseText(text)}</Text>
          ))}
        </Box>
      )}
    </Flex>
    <Box my={10}>
      <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
        About The Seller
      </Text>
      <Flex alignItems="center">
        <Box pos="relative" mr={5}>
          <Avatar src={gig.author.avatar} size="2xl" />
        </Box>
        <SimpleGrid columns={1}>
          <Text fontWeight="semibold" color="gray.700" fontSize="xl">
            {`${gig.author.first_name} ${gig.author.last_name}`}
          </Text>
          <Text color="gray.700">{gig.author.profile.quote}</Text>
          <Flex alignItems="center">
            <HStack spacing={1}>
              {[...Array(Math.floor(getFullStar(gig.author.average_rating.rating__avg)))].map(
                (el, i) => (
                  <Icon as={FaStar} h={4} w={4} color="yellow.400" key={i} />
                )
              )}
              {hasHalfStar(gig.author.average_rating.rating__avg) && (
                <Icon
                  as={FaStarHalfAlt}
                  h={4}
                  w={4}
                  color="yellow.400"
                />
              )}
              {[...Array(getNullStar(gig.author.average_rating.rating__avg))].map((el, i) => (
                <Icon as={FaRegStar} h={4} w={4} color="gray.400" key={i} />
              ))}
            </HStack>
            <Text color="yellow.400" ml={2}>
              {gig.author.average_rating.rating__avg}
            </Text>
            <Text color="gray.500" ml={2}>
              ({gig.author.total_ratings})
            </Text>
          </Flex>
          <HStack mt={1} >
            <Button colorScheme="blue" size="sm" w="120px" onClick={() => window.location = `mailto:${gig.author.profile.contact_email}`}>
              Email Me
            </Button>
            <Button colorScheme="blue" size="sm" w="120px" onClick={() => window.location = `tel:${gig.author.profile.contact_number}`}>
              Call Me
            </Button>
          </HStack>
        </SimpleGrid>
      </Flex>
    </Box>
    <Box p={5} borderWidth="1px" borderColor="gray.200" rounded="md">
      <SimpleGrid columns={2} spacing={5}>
        <Box>
          <Text color="gray.500">From</Text>
          <Text color="gray.700" fontWeight="semibold">
            {gig.author.profile.location}
          </Text>
        </Box>
        <Box>
          <Text color="gray.500">Member since</Text>
          <Text color="gray.700" fontWeight="semibold">
            {(new Date(gig.author.date_joined).toLocaleString('default', { month: 'short', year: 'numeric' }))}
          </Text>
        </Box>
      </SimpleGrid>
      <Box
        mt={5}
        pt={5}
        borderTopWidth="1px"
        borderTopColor="gray.200"
        color="gray.700"
        className="post-content"
      >
        {parse(gig.author.profile.bio)}
      </Box>
    </Box>
    <Box my={10}>
      <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
        Compare Packages
      </Text>
      <PackageCompare packages={gig.packages} />
    </Box>
    <Box my={10}>
      <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
        Recommended For You
      </Text>
      <SimpleGrid columns={3} spacing={5}>
        {/* {[...Array(3)].map((el, i) => (
          <SellerCard key={i} />
        ))} */}
      </SimpleGrid>
    </Box>
    <Box my={10}>
      <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
        Frequently Asked Question
      </Text>
      <FAQ />
    </Box>
    <Box py={10} borderTopWidth="1px" borderTopColor="gray.200">
      <Box className="post-content" color="gray.700">
        {gig.faq && gig.faq.length > 0 && gig.faq.map((e, i) => (
          <>
          {i%2 === 0 ? (
            <Text key={i} fontWeight={700}>Q: {parse(e.replace(/['"]+/g, ''))}</Text>
          ) : (
            <Text key={i}>A: {parse(e.replace(/['"]+/g, ''))}</Text>
          )}
          </>
        ))}
      </Box>
    </Box>
  </>;
};

export default GigLeftPanel;
