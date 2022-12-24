import React, { useState } from 'react';
import {
    Flex,
    Box,
    Button,
    Icon,
    IconButton,
    Image,
    Text,
    SimpleGrid,
    Grid,
    GridItem,
    Avatar,
    Heading,
    HStack,
    Divider,
    Select,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import Review from './Review';
import { useQuery } from '@tanstack/react-query';
import { getGigComments } from '../api';
import { useParams } from 'react-router-dom';

const GigReviews = () => {
    const [comments, setComments] = useState([])
    const { id } = useParams();
    const { status, data, error, isFetching, isLoading, isError } = useQuery(["gig_reviews", id], () => getGigComments(id), {
        enabled: id !== undefined,
        onSuccess: (res) => {
            if (res.results && res.results.length > 0) {
                setComments(res.results.map(e => {
                    return {...e, isComment: e.rating === null, isReview: e.rating !== null}
                }))
            }
        }
    })

    const ReviewsHeader = () => (
        <Flex mb={5} alignItems='center'>
            <Text fontSize="2xl" color="gray.700">Reviews</Text>
            <Text fontSize="2xl" color="gray.400" ml={3}>({comments.length})</Text>
        </Flex>
    );

    return (
        <Box>
            {comments.length > 0 && (
                <>
                    <ReviewsHeader />
                    <Box w="100%" h="1px" bg="gray.200" my={10} />
                    <SimpleGrid columns={1} spacing={10}>
                        {data.results.map((el, i) => (
                            <Review review={el} key={i} />
                        ))}
                    </SimpleGrid>
                </>
            )}
        </Box>
    );
};

export default GigReviews;
