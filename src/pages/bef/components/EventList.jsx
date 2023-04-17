import { SimpleGrid, Text, Box, Image, Flex } from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../../../api';

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

function EventList() {
    const { status, data, error, isFetching, isLoading, isError } = useQuery(["events"], () => getEvents())

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <SimpleGrid columns={4} spacing={3}>
            {data.results.map((el, i) => (
                <Box border="1px solid #ccc" rounded="md" _hover={{ bg: "gray.100" }} p={3} as={Link} to={`/u/events/${el.slug}`} key={i}>
                    <Image pointerEvents="none" w="100%" rounded="md" src={el.image} />
                    <Text my={2} fontWeight={600}>{el.title}</Text>
                    <Text fontSize="xs">{formatDate(el.event_start_date)} - {formatDate(el.event_end_date)} : {formatTime(el.event_time_from)} - {formatTime(el.event_time_to)}</Text>
                    <Text fontSize="xs">Dhaka</Text>
                </Box>
            ))}
        </SimpleGrid>
    )
}

export default EventList