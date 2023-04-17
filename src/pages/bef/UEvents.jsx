import { Heading, Text, Box } from '@chakra-ui/react';
import AllLayout from '../../layouts/AllLayout';
import { useState } from 'react';
import { getLatestEvent } from '../../api';
import { useQuery } from '@tanstack/react-query';
import EventList from './components/EventList';
import Event from './components/Event';
import { InfoIcon } from '@chakra-ui/icons';

function UEvents() {
  const [selected, setSelected] = useState("")

  const { status, data, error, isFetching, isLoading, isError } = useQuery(["latest-event"], () => getLatestEvent())

  if (isLoading) {
    return (
      <AllLayout><div>Loading...</div></AllLayout>
    )
  }

  if(data.error || isError) {
    return(
      <AllLayout>
      <Box textAlign="center" maxW={'4xl'} m={'auto'} py={24}>
        <InfoIcon boxSize={'50px'} color={'blue.500'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Coming Soon!
        </Heading>
        <Text color={'gray.500'}>
          There are no events currently. We will come back soon. Stau tuned.
        </Text>
      </Box>
    </AllLayout>
    )
  }

  return (
    <AllLayout>
      <Box
        maxW={1300}
        mx={"auto"}
      >
        <Event data={data} />
      </Box>
      <Box
        maxW={1300}
        mx={"auto"}
        my={5}
      >
        <EventList />
      </Box>
    </AllLayout>
  );
}

export default UEvents;
