import {
  SimpleGrid, Text, Box, Image, Flex, Button, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';

function formatDate(dateString) {
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];

  return `${day} ${monthName}`;
}

function formatTime(timeString) {
  const date = new Date(`1970-01-01T${timeString}Z`);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';
  const twelveHourFormat = hours % 12 === 0 ? 12 : hours % 12;
  const formattedHour = twelveHourFormat.toString().padStart(2, '0');
  const formattedTime = `${formattedHour}:${minutes.toString().padStart(2, '0')} ${period}`;

  return formattedTime;
}

function Event({ data }) {
  const [selected, setSelected] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    onOpen()
  }

  return (
    <SimpleGrid columns={2} spacing={5}>
      <Box display="inline-block">
        <Box position="sticky" top={25}>
          <Image pointerEvents="none" w="100%" rounded="md" src={data.image} />
          <Text mt={3} textAlign="center">{data.ticket_title}</Text>
        </Box>
      </Box>
      <Box width="100%">
        <Text fontSize="sm" fontWeight={600} color="gray.500">{formatDate(data.event_start_date)} - {formatDate(data.event_end_date)} : {formatTime(data.event_time_from)} - {formatTime(data.event_time_to)}</Text>
        <Text fontSize="3xl" fontWeight={600}>{data.title}</Text>
        <Text fontSize="sm" fontWeight={600} color="gray.500">{data.location}</Text>
        <Text mt={3}>{data.description}</Text>

        <SimpleGrid columns={2} spacing={2} mt={3}>
          <Box
            cursor="pointer"
            pointerEvents={data.ticket_availability === 0 ? "none" : "inherit" }
            bg={selected === "REGULAR" ? "gray.700" : "gray.100"}
            border="1px solid #ccc"
            color={selected === "REGULAR" ? "white" : "gray.700"}
            p={3}
            rounded="md"
            _hover={{
              textDecoration: "none",
            }}
            onClick={() => setSelected("REGULAR")}
          >
            <Flex>
              <Text width={150} fontWeight={600}>Regular Ticket</Text>
              <Text>{data.regular_price} TK</Text>
            </Flex>
            <Text fontSize="sm">{data.regular_features}</Text>
          </Box>
          <Box
            cursor="pointer"
            pointerEvents={data.ticket_availability === 0 ? "none" : "inherit" }
            bg={selected === "PREMIUM" ? "gray.700" : "gray.100"}
            border="1px solid #ccc"
            color={selected === "PREMIUM" ? "white" : "gray.700"}
            p={3}
            rounded="md"
            _hover={{
              textDecoration: "none",
            }}
            onClick={() => setSelected("PREMIUM")}
          >
            <Flex>
              <Text width={150} fontWeight={600}>Premium Ticket</Text>
              <Text>{data.premium_price} TK</Text>
            </Flex>
            <Text fontSize="sm">{data.premium_features}</Text>
          </Box>
        </SimpleGrid>
        {data.ticket_availability === 0 ? (
          <Text  mb={3} mt={1}>Events ticket sold out!</Text>
        ) : (<>
        {selected === "" ? (
          <Text mb={3} mt={1} color="blue.500">Select one to start buing ticket</Text>
        ) : (
          <Button mb={3} mt={1} colorScheme='blue' size='sm' onClick={handleClick}>
            Submit Google Form to Complete
          </Button>
        )}
        </>)}
        <Text color="pink.500" fontWeight={600}>{data.ticket_availability} Tickets remaining</Text>
        <Box mt={5}>
          <Text fontWeight={600} mb={1} >Event Info</Text>
          <Box className='post-content' dangerouslySetInnerHTML={{ __html: data.event_info }}>
          </Box>
        </Box>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Submit Request</DrawerHeader>
          <DrawerBody>
            <iframe
              title="Survey"
              src={data.google_form_iframe_url}
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              style={{ width: '100%', height: 'calc(100% - 3px)' }}
            >
              Loading…
            </iframe>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </SimpleGrid>
  );
}

export default Event;
