import { Box, Image, Text, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react';
import { useQuery } from "@tanstack/react-query";
import { getAds } from '../api';

function Advertisement({index}) {
    const { status, data, error, isFetching, isLoading } = useQuery(
        ["ads"],
        () => getAds()
    );


    if (!data) {
        return <></>
    }

    if(data.length < index){
        return <></>
    }

    return (
        <Box as={ChakraLink} isExternal href={data[index].url} w="100%" pos="relative">
            <Image
                h="320px"
                w="100%"
                rounded="md"
                objectFit="cover"
                src={data[index].image}
            />
            <SimpleGrid columns={1} pos="absolute" top="0" left="0" p={10}>
                <Text
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="white"
                    letterSpacing="1.1px"
                >
                    {data[index].title}
                </Text>
                <Text color="white">
                    {data[index].subtitle}
                </Text>
            </SimpleGrid>
        </Box>
    );
}

export default Advertisement;
