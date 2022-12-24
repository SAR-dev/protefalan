import {
    Box, Button, Flex, Text, Textarea, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { updateComment } from "../api";
import { useQueryClient } from '@tanstack/react-query';

const rates = ["Terrible", "Good", "Very Good", "Great", "Awesome"]

const UpdateComment = ({ comment, setUpdating }) => {
    const toast = useToast()
    const queryClient = useQueryClient()

    const [message, setMessage] = useState(comment.message)
    const [rating, setRating] = useState(comment.rating)
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)

    const submit = () => {
        setLoading(true)
        const data = {
            message,
            rating: rating === 0 ? null : rating,
            gig: comment.gig,
        }
        updateComment(comment.id, data).then(res => {
            if (res.error) {
                setLoading(false)
                toast({
                    title: "Updfate failed.",
                    description: res.error.detail,
                    status: "error",
                    position: "bottom-left",
                    duration: 9000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Comment updated!",
                    description: "Updated the comment successfully.",
                    status: "info",
                    position: "bottom-left",
                    duration: 9000,
                    isClosable: true,
                });
                setMessage("")
                setRating(0)
                setShow(false)
                setLoading(false)
                queryClient.invalidateQueries(["gig_reviews", comment.gig.toString()])
                setUpdating(false)
            }
        })
    }

    return (
        <Box rounded="md">
            <Flex alignItems="center" w="100%" justifyContent="space-between" mb={2}>
                <Text variant="xs" fontWeight="bold">
                    Update comment
                </Text>
                <Button size="sm" colorScheme="blue" onClick={submit} isLoading={loading}>
                    Update
                </Button>
            </Flex>
            <Textarea value={message} disabled={loading} onChange={e => setMessage(e.target.value)} placeholder='Write here...' rows="5" bg="white" />
            {show ? (
                <Box mt={5} rounded="md" p={5} bg="gray.200">
                    <Flex>
                        <Text variant="xs" fontWeight="bold">
                            Rate
                        </Text>
                        {rating !== 0 && (
                            <Text ml="auto" variant="xs" fontWeight="bold" color="blue.600">
                                {rates[rating - 1]}
                            </Text>
                        )}
                    </Flex>
                    <Slider onChange={(v) => setRating(v)} defaultValue={0} min={0} max={5}>
                        {[0, 1, 2, 3, 4, 5].map((e, i) => (
                            <SliderMark value={e} mt='1' fontWeight="600" fontSize='sm' key={i}>{e}</SliderMark>
                        ))}
                        <SliderTrack bg='white'>
                            <SliderFilledTrack bg='blue.500' />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>
            ) : (
                <Button mt={5} size="sm" variant="outline" onClick={() => setShow(true)}>Update rating</Button>
            )}
        </Box>
    )
}

export default UpdateComment;