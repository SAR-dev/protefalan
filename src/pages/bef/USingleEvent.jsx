import { SimpleGrid, Text, Box, Image, Flex } from '@chakra-ui/react';
import AllLayout from '../../layouts/AllLayout';
import { useState } from 'react';
import { getSingleEvent } from '../../api';
import { useQuery } from '@tanstack/react-query';
import EventList from './components/EventList';
import { useParams } from 'react-router-dom';
import Event from './components/Event';

function USingleEvent() {
  const [selected, setSelected] = useState("")
  const { slug } = useParams();
  
  const { status, data, error, isFetching, isLoading, isError } = useQuery(["event", slug], () => getSingleEvent(slug))

  if (isLoading) {
    return (
      <AllLayout><div>Loading...</div></AllLayout>
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

export default USingleEvent;
