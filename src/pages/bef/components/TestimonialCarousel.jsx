import React, { useState } from 'react';
import {
  Box,
  Icon,
  IconButton,
  Image,
  Text,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { CgQuote} from 'react-icons/cg';

const TestimonialCarousel = ({ h = '320px', items = 1, heading }) => {
  const data = [
    {
      name: 'Sayed Rafi',
      position: "CEO, Microsoft Office",
      quote: "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
      avatar: 'https://s.wsj.net/public/resources/images/BN-OO824_fblive_M_20160621141958.jpg',
    },
    {
      name: 'Sayed Rafi',
      position: "CEO, Microsoft Office",
      quote: "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
      avatar: 'https://s.wsj.net/public/resources/images/BN-OO824_fblive_M_20160621141958.jpg',
    },
    {
      name: 'Sayed Rafi',
      position: "CEO, Microsoft Office",
      quote: "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
      avatar: 'https://s.wsj.net/public/resources/images/BN-OO824_fblive_M_20160621141958.jpg',
    },
    {
      name: 'Sayed Rafi',
      position: "CEO, Microsoft Office",
      quote: "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
      avatar: 'https://s.wsj.net/public/resources/images/BN-OO824_fblive_M_20160621141958.jpg',
    },
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        {heading}
      </Text>
      <Box h={h} w="100%" overflow="hidden" role="group">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          gutter={15}
          numberOfCards={items}
          leftChevron={
            <IconButton
              opacity="0"
              _groupHover={{ opacity: 1 }}
              rounded="full"
              boxShadow="md"
              ml={2}
              icon={<Icon as={AiOutlineArrowLeft} />}
            />
          }
          rightChevron={
            <IconButton
              opacity="0"
              _groupHover={{ opacity: 1 }}
              rounded="full"
              boxShadow="md"
              mr={2}
              icon={<Icon as={AiOutlineArrowRight} />}
            />
          }
        >
          {data.map((el, i) => (
            <Box w="100%" p={16} rounded="xl" bg="white" boxShadow="md">
              <Flex alignItems="center">
                <Box w="350px" flexShrink="0">
                  <Image
                    src={el.avatar}
                    objectFit="cover"
                    h="200px"
                    w="200px"
                    rounded="full"
                  />
                </Box>
                <Box>
                  <Box pos="relative">
                    <Text fontSize="xl">
                      {el.quote}
                    </Text>
                  </Box>
                  <Flex fontSize="xl" mt={3}>
                    <Text fontWeight="bold">{el.name}</Text>
                    <Text ml={2} color="gray.500">
                      - {el.position}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          ))}
        </ItemsCarousel>
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
