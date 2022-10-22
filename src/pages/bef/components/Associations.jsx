import React from 'react';
import { Container, Image, SimpleGrid, Text, Box, Flex } from '@chakra-ui/react';

const Associations = ({ title }) => {
  const data = [
    'https://w7.pngwing.com/pngs/180/560/png-transparent-state-grid-corporation-of-china-logo-business-electrical-grid-state-power-text-logo-china.png',
    'https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png',
    'https://1000logos.net/wp-content/uploads/2018/02/United-Healthcare-Logo.png',
    'https://1000logos.net/wp-content/uploads/2017/05/Walmart-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png',
    'https://www.carlogos.org/car-logos/toyota-logo-2019-3700x1200.png',
  ];
  return (
    <Box>
      <Text
        textAlign="center"
        fontSize="3xl"
        fontWeight="bold"
        color="blue.500"
        mb={10}
      >
        {title}
      </Text>
      <Flex justifyContent="space-between" flexWrap="wrap">
        {data.map((el, i) => (
          <Box key={i} mx={3}>
            <Image
              src={el}
              h="50px"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Associations;
