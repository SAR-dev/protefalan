import React, { useState } from "react";
import {
  Flex,
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import NavLayout from "../layouts/NavLayout";
import HomeAdCarousel from "../components/HomeAdCarousel";
import SellerCardCarousel from "../components/SellerCardCarousel";
import { getHomeFeed } from "../api";
import { getRandomColor } from "../helpers";
import { useQuery } from "@tanstack/react-query";
import AuthLayout from "../layouts/AuthLayout";

function Home() {
  const { status, data, error, isFetching, isLoading } = useQuery(
    ["feed"],
    () => getHomeFeed()
  );

  return (
    <AuthLayout>
      <NavLayout>
        <SimpleGrid columns={1} spacing={10} w="100%">
          <Flex w="100%">
            <Flex
              w="350px"
              h="320px"
              rounded="md"
              className="moon-bg"
              borderColor="gray.200"
              borderWidth="1px"
              alignItems="center"
              textAlign="center"
              color="white"
              flexShrink="0"
              p={10}
            >
              <SimpleGrid columns={1} spacing={5}>
                <Text fontWeight="semibold" fontSize="xl">
                  Hi Rafi,
                </Text>
                <Text>Get offers from sellers for your project</Text>
                <Button
                  colorScheme="teal"
                  fontSize="md"
                  w="100%"
                  _hover={{ bg: "teal.500", color: "white" }}
                  _focus={{ bg: "teal.500", color: "white" }}
                  _active={{ bg: "teal.500", color: "white" }}
                >
                  Post a Request
                </Button>
              </SimpleGrid>
            </Flex>
            <Box w="100%" overflow="hidden" ml={10}>
              <HomeAdCarousel />
            </Box>
          </Flex>
          {(isLoading || !data) &&
            [...Array(4)].map((el, i) => (
              <SellerCardCarousel
                header1=""
                header2=""
                header2Color=""
                rows={1}
                details=""
                isLoading={isLoading}
                key={`pc${i}`}
              />
            ))}
          {data && (
            <>
              {data.results.map((e, i) => (
                <>
                <SellerCardCarousel
                  header1="Most popular Gigs in"
                  header2={e.name}
                  header2Color={e.color}
                  rows={1}
                  details={e.label}
                  gigs={e.gigs}
                  categoryId={e.id}
                  key={i}
                />
                {/* {(i % 3 === 0) && <HomeAdCarousel key={`ad${i}`} />} */}
                </>
              ))}
            </>
          )}
        </SimpleGrid>
      </NavLayout>
    </AuthLayout>
  );
}

export default Home;
