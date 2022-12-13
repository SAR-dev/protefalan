import { Flex, Box, Text, SimpleGrid, Skeleton } from "@chakra-ui/react";
import SellerCard from "./SellerCard";

const SellerCardCarousel = ({
  header1,
  header2,
  header2Color,
  details,
  rows,
  isLoading = false,
  gigs
}) => {
  return (
    <Box>
      {isLoading ? (
        <>
        <Skeleton height="25px" width="300px" mb={3} />
        <Skeleton height="25px" width="400px" />
        </>
      ) : (
        <>
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
        </>
      )}

      <SimpleGrid columns={4} spacing={5} mt={5} w="100%">
        {isLoading ? (
          <>
            {[...Array(4 * rows)].map((el, i) => (
              <Skeleton height="200px" width="100%" key={i} />
            ))}
          </>
        ) : (
          <>
            {gigs && gigs.map((el, i) => (
              <SellerCard gig={el} key={i} />
            ))}
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default SellerCardCarousel;
