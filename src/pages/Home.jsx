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
            <Box w="100%" overflow="hidden">
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
          {data && data.results && (
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
                {(i % 3 === 0) && <HomeAdCarousel key={`ad${i}`} />}
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
