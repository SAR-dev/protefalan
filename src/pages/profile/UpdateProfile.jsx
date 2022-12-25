import { Avatar, Box, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import AccountUpdate from "../../components/AccountUpdate"
import ProfileUpdate from "../../components/ProfileUpdate"
import AuthLayout from "../../layouts/AuthLayout"
import NavLayout from "../../layouts/NavLayout"

const UpdateProfile = () => {
    const [account, setAccount] = useState({
        first_name: "",
        last_name: "",
        username: "",
        avatar: ""
    })
    return (
        <AuthLayout>
            <NavLayout>
                <Box maxW={1100} mx="auto">
                    <AccountUpdate />
                    <Box mt={10}>
                        <ProfileUpdate />
                    </Box>
                </Box>
            </NavLayout>
        </AuthLayout>
    )
}

export default UpdateProfile