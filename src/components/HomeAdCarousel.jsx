import React, { useState } from 'react';
import {
  Box,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import ItemsCarousel from 'react-items-carousel';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

function HomeAdCarousel() {
  const data = [
    {
      id: 1,
      title: 'Holiday Success Starts Here',
      desc: 'Head to our Holiday Hub for a head start this season.',
      image: 'https://i.imgur.com/ltgVgMe.png',
    },
    {
      id: 2,
      title: 'Introducung Subscriptions',
      desc: 'High-quality services on-repeat, hassle-free, every time.',
      image: 'https://i.imgur.com/8M7iy14.png',
    },
    {
      id: 3,
      title: 'Reach More Customers Online',
      desc: 'Engage online audiences with social media marketing techniques.',
      image: 'https://i.imgur.com/qeAQrjp.png',
    },
    {
      id: 4,
      title: 'Meet Digital Marketing Goals',
      desc: 'See your social ads bring traffic and results.',
      image: 'https://i.imgur.com/3KOaJWM.png',
    },
  ];
  
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Box h="320px" w="100%" overflow="hidden" role="group">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
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
          <Box w="100%" pos="relative" key={i}>
            <Image
              h="320px"
              w="100%"
              rounded="md"
              objectFit="cover"
              src={el.image}
            />
            <SimpleGrid columns={1} pos="absolute" top="0" left="0" p={10}>
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                color="white"
                letterSpacing="1.1px"
              >
                {el.title}
              </Text>
              <Text color="white">
                {el.desc}
              </Text>
            </SimpleGrid>
          </Box>
        ))}
      </ItemsCarousel>
    </Box>
  );
}

export default HomeAdCarousel;
