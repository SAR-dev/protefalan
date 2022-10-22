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
  StackDivider,
  List,
  ListItem,
  ListIcon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import {
  FaSlideshare,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShare,
  FaArrowRight,
} from 'react-icons/fa';
import { MdKeyboardArrowRight, MdDateRange } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import GigImageCarousel from './GigImageCarousel';
import parse from 'html-react-parser';
import PackageCompare from './PackageCompare';
import { Link } from 'react-router-dom';
import Review from './Review';
import FAQ from './FAQ';
import SellerCard from './SellerCard';

const GigLeftPanel = () => {
  const data = {
    id: 1,
    author: {
      name: 'Sayed Rafi',
      avatar: 'https://i.imgur.com/8oKUFw6.png',
      rating: 4.61,
      votes: 65,
      quote: 'Hire me, I will definitely help you!',
      country: 'Bangladesh',
      joined: 'Nov 2017',
      response_time: '2 hours',
      last_delivery: '1 day ago',
      details:
        '<p>I am Saad Gulzar, a Professional Web Developer & Designer. I have 4+ years of experience in this field using web technologies such as Figma, Adobe Xd, Html5, CSS3, javascript, bootstrap, tailwind CSS, materialize, Shopify, React js, Vue js, Node, Express, MongoDB, and Firebase. I believe in providing quality work. Feel free to contact me to discuss any project or idea.</p><p>Thank you!</p>',
    },
    category: 'Web Development',
    subCategory: 'React JS',
    title: 'I will create a responsive website with tailwind CSS and alpine js',
    images: [
      {
        id: 1,
        image: 'https://i.imgur.com/ltgVgMe.png',
      },
      {
        id: 2,
        image: 'https://i.imgur.com/8M7iy14.png',
      },
      {
        id: 3,
        image: 'https://i.imgur.com/qeAQrjp.png',
      },
      {
        id: 4,
        image: 'https://i.imgur.com/3KOaJWM.png',
      },
      {
        id: 5,
        image:
          'https://www.creatopy.com/blog/wp-content/uploads/2020/04/promotion-techniques.png',
      },
    ],
    content: `<p>Hello there,</p><p></p><p></p><p><strong>Looking for an EXPERT web developer and designer?</strong></p><p></p><p>Great, you’re at right place.</p><p></p><p></p><p></p><p><strong>Services you will get:</strong></p><p></p><ul><li>Fully Responsive &amp; Stunning Website (For Desktop, Tablet &amp; Mobile).</li><li>Migration of website to a new technology.</li><li>Using Html, CSS, JavaScript and Bootstrap/Tailwind CSS/Materialize.</li><li>Revisions until you’re 100% satisfied.</li><li>Website in multiple languages.</li><li>Ongoing support after completion of project.</li></ul><p></p><p></p><p><strong>Technologies I use?</strong></p><p></p><ul><li>Html5</li><li>Css3</li><li>JavaScript/Alpine.js</li><li>Bootstrap</li><li>Tailwind CSS</li><li>Materialize</li><li>Primer.css</li></ul><p></p><p></p><p><strong>Why me?</strong></p><p></p><ul><li>4+ years of experience in web development.</li><li>Expert with front-end frameworks mentioned above.</li><li>Fluent in English and understanding project requirements.</li><li>100% customer satisfaction.</li><li>On time delivery.</li><li>Easily access able 24/7.</li></ul><p></p><p></p><p><strong>What do I need to get started?</strong></p><p></p><ul><li>Business/organization name or logo.</li><li>Images and content (or I can use dummy)</li><li>Sample website or design you like. (optional)</li><li>Color scheme and fonts (optional)</li></ul><p></p><p></p><p>If you need a website using a new and fast web technology like tailwind CSS, bootstrap or material design. Don’t worry, I will design and develop it for you.</p><p></p><p>Please Text me before placing an order to discuss project details and budget accordingly.</p><p></p><p>Thanks!</p><p>Regards.</p>`,
    info: [
      { title: 'Programming Languages', points: ['HTML', 'CSS', 'JavaScript'] },
      { title: 'Expertise', points: ['PSD to HTML', 'Raw Code', 'Animation'] },
      {
        title: 'Specialization',
        points: ['Marketing', 'Payment', 'Special Support'],
      },
    ],
  };
  const getFullStar = score => {
    return Math.floor(score);
  };

  const getNullStar = score => {
    return 5 - Math.round(score);
  };

  const getHalfStar = score => {
    return 5 - Math.floor(score) - (5 - Math.round(score));
  };
  return (
    <>
      <Flex alignItems="center">
        <Text
          as={Link}
          color="blue.500"
          _hover={{ color: 'blue.600' }}
          fontWeight="semibold"
        >
          {data.category}
        </Text>
        <Icon as={MdKeyboardArrowRight} h={5} w={5} mx={1} color="gray.700" />
        <Text
          as={Link}
          color="blue.500"
          _hover={{ color: 'blue.600' }}
          fontWeight="semibold"
        >
          {data.subCategory}
        </Text>
      </Flex>
      <Text fontSize="3xl" fontWeight="semibold" color="gray.700">
        {data.title}
      </Text>
      <Flex my={5} alignItems="center">
        <Avatar src={data.author.avatar} name={data.author.name} size="sm" />
        <Text fontWeight="bold" color="gray.700" ml={3}>
          {data.author.name}
        </Text>
        <Text fontWeight="bold" color="gray.700" mx={3}>
          |
        </Text>
        <HStack spacing={1}>
          {[...Array(Math.floor(getFullStar(data.author.rating)))].map(
            (el, i) => (
              <Icon as={FaStar} h={4} w={4} color="yellow.400" key={i} />
            )
          )}
          {[...Array(getHalfStar(data.author.rating))].map((el, i) => (
            <Icon as={FaStarHalfAlt} h={4} w={4} color="yellow.400" key={i} />
          ))}
          {[...Array(getNullStar(data.author.rating))].map((el, i) => (
            <Icon as={FaRegStar} h={4} w={4} color="gray.400" key={i} />
          ))}
        </HStack>
        <Text color="yellow.400" fontWeight="bold" ml={2}>
          {data.author.rating}
        </Text>
        <Text color="gray.500" fontWeight="semibold" ml={2}>
          ({data.author.votes})
        </Text>
      </Flex>
      <GigImageCarousel images={data.images} />
      <Box my={10}>
        <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
          About This Gig
        </Text>
        <Box className="post-content" color="gray.700">
          {parse(data.content)}
        </Box>
      </Box>
      <Flex
        justifyContent="space-between"
        py={5}
        borderTopWidth="1px"
        borderTopColor="gray.200"
      >
        {data.info.map((el, i) => (
          <Box color="gray.700" key={i}>
            <Text fontWeight="semibold" mb={2}>
              {el.title}
            </Text>
            {el.points.map((text, i) => (
              <Text key={i}>{text}</Text>
            ))}
          </Box>
        ))}
      </Flex>
      <Box my={10}>
        <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
          About The Seller
        </Text>
        <Flex alignItems="center">
          <Box pos="relative" mr={5}>
            <Avatar src={data.author.avatar} size="2xl" />
            <Flex
              h="50px"
              w="50px"
              rounded="full"
              justifyContent="center"
              alignItems="center"
              fontWeight="semibold"
              fontSize="xs"
              bg="pink.500"
              color="white"
              pos="absolute"
              right="0"
              bottom="0"
              mb="-5px"
              mr="-5px"
            >
              LV 02
            </Flex>
          </Box>
          <SimpleGrid columns={1}>
            <Text fontWeight="semibold" color="gray.700" fontSize="xl">
              {data.author.name}
            </Text>
            <Text color="gray.700">{data.author.quote}</Text>
            <Flex alignItems="center">
              <HStack spacing={1}>
                {[...Array(Math.floor(getFullStar(data.author.rating)))].map(
                  (el, i) => (
                    <Icon as={FaStar} h={4} w={4} color="yellow.400" key={i} />
                  )
                )}
                {[...Array(getHalfStar(data.author.rating))].map((el, i) => (
                  <Icon
                    as={FaStarHalfAlt}
                    h={4}
                    w={4}
                    color="yellow.400"
                    key={i}
                  />
                ))}
                {[...Array(getNullStar(data.author.rating))].map((el, i) => (
                  <Icon as={FaRegStar} h={4} w={4} color="gray.400" key={i} />
                ))}
              </HStack>
              <Text color="yellow.400" ml={2}>
                {data.author.rating}
              </Text>
              <Text color="gray.500" ml={2}>
                ({data.author.votes})
              </Text>
            </Flex>
            <Button colorScheme="blue" size="sm" mt={1} w="120px">
              Contact Me
            </Button>
          </SimpleGrid>
        </Flex>
      </Box>
      <Box p={5} borderWidth="1px" borderColor="gray.200" rounded="md">
        <SimpleGrid columns={2} spacing={5}>
          <Box>
            <Text color="gray.500">From</Text>
            <Text color="gray.700" fontWeight="semibold">
              Pakistan
            </Text>
          </Box>
          <Box>
            <Text color="gray.500">Member since</Text>
            <Text color="gray.700" fontWeight="semibold">
              Nov 2017
            </Text>
          </Box>
          <Box>
            <Text color="gray.500">Avg. response time</Text>
            <Text color="gray.700" fontWeight="semibold">
              2 hours
            </Text>
          </Box>
          <Box>
            <Text color="gray.500">Last delivery</Text>
            <Text color="gray.700" fontWeight="semibold">
              1 day
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
          {parse(data.author.details)}
        </Box>
      </Box>
      <Box my={10}>
        <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
          Compare Packages
        </Text>
        <PackageCompare />
      </Box>
      <Box my={10}>
        <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
          Recommended For You
        </Text>
        <SimpleGrid columns={3} spacing={5}>
          {[...Array(3)].map((el, i) => (
            <SellerCard key={i} />
          ))}
        </SimpleGrid>
      </Box>
      <Box my={10}>
        <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={3}>
          Frequently Asked Question
        </Text>
        <FAQ />
      </Box>
      <Box py={10} borderTopWidth="1px" borderTopColor="gray.200">
        <SimpleGrid columns={1} spacing={10}>
          {[...Array(6)].map((el, i) => (
            <Review key={i} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GigLeftPanel;
