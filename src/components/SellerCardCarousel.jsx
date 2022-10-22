import React from 'react';
import {
  Flex,
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import SellerCard from './SellerCard';

const SellerCardCarousel = ({
  header1,
  header2,
  header2Color,
  details,
  rows,
}) => {
  return (
    <Box>
      <Flex fontSize="2xl" fontWeight="bold">
        <Text>{header1}</Text>
        {header2 && (
          <Text ml={2} color={header2Color}>
            {header2}
          </Text>
        )}
      </Flex>
      <Text fontSize="xl" color="gray.600">
        {details}
      </Text>
      <SimpleGrid columns={4} spacing={5} mt={5} w="100%">
        {[...Array(4 * rows)].map((el, i) => (
          <SellerCard key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SellerCardCarousel;
