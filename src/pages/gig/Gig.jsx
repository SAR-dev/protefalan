import { useState } from 'react';
import { Flex, Box, Button, Icon, Text, SimpleGrid, Grid, GridItem, useToast, Textarea } from '@chakra-ui/react';
import NavLayout from '../../layouts/NavLayout';
import AuthLayout from '../../layouts/AuthLayout';
import { FaSlideshare, FaShare, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import GigRightPanel from '../../components/GirRightPanel';
import GigLeftPanel from '../../components/GigLeftPanel';
import CreateComment from '../../components/CreateComment';
import { useQuery } from '@tanstack/react-query';
import { getGigDetails } from '../../api';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GigReviews from "../../components/GigReviews";

const Gig = () => {
  const { id } = useParams();
  const toast = useToast()

  const { status, data, error, isFetching, isLoading, isError } = useQuery(["gigs", id], () => getGigDetails(id), {
    enabled: id !== undefined
  })


  if (isLoading) {
    return (
      <AuthLayout>
        <NavLayout>
        <div>Loading...</div>
        </NavLayout>
      </AuthLayout>
    )
  }

  if (isError) {
    return (
      <Text color="red.500">
        {error.message}
      </Text>
    )
  }

  return (
    <AuthLayout>
      <NavLayout>
        <SimpleGrid columns={1} spacing={10}>
          <Flex
            alignItems="center"
            p={5}
            bg="gray.50"
            borderWidth="1px"
            borderColor="gray.200"
            rounded="md"
          >
            <Icon as={FaSlideshare} h={12} w={12} color="teal.500" mr={5} />
            <SimpleGrid columns={1} w="450px">
              <Text fontWeight="semibold" color="gray.700">
                Reach More Customers
              </Text>
              <Text color="gray.500" fontSize="sm">
                You got the talent. Now go viral. Share your Gig on social media
                to connect with new customers and get more orders.
              </Text>
            </SimpleGrid>
            <Flex ml="auto">
              <CopyToClipboard text={window.location.href}
                onCopy={() => toast({
                  title: "Copied!",
                  description: "The sharable link has been copied to clipboard.",
                  status: "info",
                  position: "bottom-left",
                  duration: 9000,
                  isClosable: true,
                })}>
                <Button
                  colorScheme="teal"
                  size="sm"
                  leftIcon={<Icon as={FaShare} />}
                  ml={2}
                >
                  Copy Link
                </Button>
              </CopyToClipboard>
            </Flex>
          </Flex>
          <Grid templateColumns="repeat(16, 1fr)" gap={16}>
            <GridItem colSpan={10}>
              <GigLeftPanel gig={data} />
              <CreateComment gig={id} />
            </GridItem>
            <GridItem colSpan={6}>
              <GigRightPanel requirements={data.requirements} extra_services={data.extra_services} packages={data.packages} />
            </GridItem>
          </Grid>
          <Box bg="#F5F5F5" p={10} rounded="md">
            <GigReviews />
          </Box>
        </SimpleGrid>
      </NavLayout >
    </AuthLayout>
  );
};

export default Gig;
