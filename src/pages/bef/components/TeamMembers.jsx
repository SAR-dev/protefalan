import { Box, Flex, Icon, Image, Text, SimpleGrid } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const TeamMembers = ({ heading, color }) => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/brmJsH5/image.png",
      name: 'Oly Shahriar Hasan',
      info: "Bsc. In CSE",
      position: 'Chief Executive Officer (CEO)'
    },
    {
      id: 2,
      image: 'https://i.ibb.co/brmJsH5/image.png',
      name: 'Ishtiaque Ahmed Tapu',
      info: "MBA in Marketing",
      position: 'Strategic and Marketing director',
    },
    {
      id: 3,
      image:"https://i.ibb.co/brmJsH5/image.png",
      name: 'Nesar Ahmed',
      info: "BBA in HRM",
      position: 'Head of Operations'
    }
  ];

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={5} color={color}>
        {heading}
      </Text>
      <SimpleGrid columns={data.length} spacing={5}>
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
            <Text mb={1}>{el.info}</Text>
            <Text mb={1}>{el.position}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamMembers;
