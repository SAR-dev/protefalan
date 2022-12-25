import React, { useRef, useState } from "react"
import { Avatar, useToast, AvatarBadge, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, IconButton, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { MdUpload } from "react-icons/md";
import { updateAccount, getMe } from "../api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../store";

const AccountUpdate = () => {
    const { accessToken } = useAuthStore();
    const avatarRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const queryClient = useQueryClient()
    const toast = useToast()
    const [initialized, setInitialized] = useState(false)

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm()

    const { status, data, error, isError, isFetching, isLoading } = useQuery(
        ["me", accessToken],
        () => getMe(), {
        onSuccess: (res) => {
            if (res) {
                Object.keys(res).forEach(key => {
                    setValue(key, res[key])
                })
            }
            setInitialized(true)
        },
        enabled: !initialized
    });

    function onSubmit(values) {
        setLoading(true)
        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]));
        updateAccount(formData).then(res => {
            if (res.error) {
                toast({
                    title: "Error",
                    description: res.error.detail,
                    status: "error",
                    position: "bottom-left",
                    duration: 9000,
                    isClosable: true,
                });
                setLoading(false)
            } else {
                oast({
                    title: "Updated",
                    description: "Account updated.",
                    status: "info",
                    position: "bottom-left",
                    duration: 9000,
                    isClosable: true,
                });
                setLoading(false)
                setInitialized(false)
                queryClient.invalidateQueries(["me"])
            }
        })
    }

    const handleClick = () => {
        avatarRef.current.click()
    }

    const handleAvatar = (e) => {
        const files = e.target.files
        if (files.length > 0) {
            setValue('avatar', files[0]);
        }
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return (
            <Text color="red.500">
                {error.message}
            </Text>
        )
    }

    return (
        <Flex maxW={1100} mx="auto">
            <Box mr={10}>
                <Avatar size="2xl" name="Sayed Rafi">
                    <AvatarBadge as={IconButton} icon={<MdUpload />} colorScheme="green" onClick={handleClick} />
                </Avatar>
            </Box>
            <Box w="100%">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SimpleGrid columns={3} spacing={5}>
                        <FormControl isInvalid={errors.first_name}>
                            <FormLabel htmlFor="first_name" mb={2}>First name</FormLabel>
                            <Input id="first_name" {...register('first_name', {
                                required: 'This is required',
                                minLength: { value: 3, message: 'Minimum length should be 3' },
                            })} />
                            <FormErrorMessage>
                                {errors.first_name ? errors.first_name.message : "Ok"}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.last_name}>
                            <FormLabel htmlFor="last_name" mb={2}>Last name</FormLabel>
                            <Input id="last_name" {...register('last_name', {
                                required: 'This is required',
                                minLength: { value: 3, message: 'Minimum length should be 3' },
                            })} />
                            <FormErrorMessage>
                                {errors.last_name ? errors.last_name.message : "Ok"}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.username}>
                            <FormLabel htmlFor="username" mb={2}>Username</FormLabel>
                            <Input id="username" {...register('username', {
                                required: 'This is required',
                                minLength: { value: 3, message: 'Minimum length should be 3' },
                            })} />
                            <FormErrorMessage>
                                {errors.username ? errors.username.message : "Ok"}
                            </FormErrorMessage>
                        </FormControl>
                    </SimpleGrid>
                    <input type="file" hidden {...register('avatar')} />
                    <input hidden type="file" accept="image/png, image/jpeg, image/jpg" ref={avatarRef} onChange={handleAvatar} />
                    <Button mt={4} colorScheme='teal' isLoading={loading} type='submit'>
                        Update Account
                    </Button>
                </form>
            </Box>
        </Flex>
    )
}

export default AccountUpdate