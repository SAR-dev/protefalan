import { Flex, Button, Text, Container, Box } from '@chakra-ui/react';

const CTAwithTitleSubtitle = ({
  h = '50vh',
  align = 'center',
  bg,
  color,
  title,
  subtitle,
  details,
  moreDetails,
  redirect,
  maxW="3xl"
}) => {
  return (
    <Flex
      h={h}
      w="100%"
      textAlign={align}
      alignItems="center"
      bg={bg}
      color={color}
      rounded="md"
    >
      <Container maxW={maxW}>
        <Text fontSize="5xl" fontWeight="bold" mb={5}>
          {title}
        </Text>
        <Text fontSize="lg">{subtitle}</Text>
        {details && <Text fontSize="lg" mt={3}>{details}</Text>}
        {moreDetails && <Text fontSize="lg" mt={3}>{moreDetails}</Text>}
        {redirect && <Button colorScheme="blue" mt={5}>Create Account</Button>}
      </Container>
    </Flex>
  );
};

export default CTAwithTitleSubtitle;
