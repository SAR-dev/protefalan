import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import UnAuthLayout from '../../layouts/UnAuthLayout';

export default function UAffiliates() {
  return (
    <UnAuthLayout>
      <Box textAlign="center" maxW={'4xl'} m={'auto'} py={24}>
        <InfoIcon boxSize={'50px'} color={'blue.500'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Coming Soon!
        </Heading>
        <Text color={'gray.500'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Box>
    </UnAuthLayout>
  );
}
