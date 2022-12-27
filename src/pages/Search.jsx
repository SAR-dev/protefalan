import { Text, SimpleGrid } from "@chakra-ui/react";
import NavLayout from "../layouts/NavLayout";
import SellerCardCarousel from "../components/SellerCardCarousel";
import { searchGig } from "../api";
import { useQuery } from "@tanstack/react-query";
import AuthLayout from "../layouts/AuthLayout";
import { useParams } from "react-router-dom";

function Search() {
    const { keyword } = useParams()
    const { status, data, error, isError, isFetching, isLoading } = useQuery(
        ["gigs_search", keyword],
        () => searchGig(keyword)
    );

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
                <SimpleGrid columns={1} spacing={10} w="100%">
                    {data && (
                        <SellerCardCarousel
                            header1="Search results for"
                            header2={keyword}
                            header2Color="teal.500"
                            rows={10}
                            gigs={data.results}
                        />
                    )}
                </SimpleGrid>
            </NavLayout>
        </AuthLayout>
    )
}

export default Search;
