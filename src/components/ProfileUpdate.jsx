import React, { useRef, useState } from "react"
import { Avatar, AvatarBadge, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, IconButton, Input, Select, SimpleGrid, Text, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { MdUpload } from "react-icons/md";
import { updateAccount, getMe } from "../api";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../store";

const blood_groups = [
    ("A+"),
    ("A-"),
    ("B+"),
    ("B_"),
    ("O+"),
    ("O-"),
    ("AB+"),
    ("AB-"),
]

const ProfileUpdate = () => {
    const { accessToken } = useAuthStore();
    const avatarRef = useRef(null)
    const [loading, setLoading] = useState(false)

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
        }
    });

    function onSubmit(values) {
        setLoading(true)
        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]));
        updateAccount(formData).then(res => {
            console.log(res)
            if (res.error) {
                setLoading(false)
            } else {
                setLoading(false)
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
            <Box w="100%">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SimpleGrid columns={2} spacing={10}>
                        <SimpleGrid columns={1} spacing={5}>
                            <FormControl isInvalid={errors.nickname}>
                                <FormLabel htmlFor="nickname" mb={2}>Nick name</FormLabel>
                                <Input id="nickname" {...register('nickname', {
                                    required: 'This is required',
                                    minLength: { value: 3, message: 'Minimum length should be 3' },
                                })} />
                                <FormErrorMessage>
                                    {errors.nickname ? errors.nickname.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.quote}>
                                <FormLabel htmlFor="quote" mb={2}>Quote</FormLabel>
                                <Input id="quote" {...register('quote', {
                                    required: 'This is required',
                                    minLength: { value: 3, message: 'Minimum length should be 3' },
                                })} />
                                <FormErrorMessage>
                                    {errors.quote ? errors.quote.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.bio}>
                                <FormLabel htmlFor="bio" mb={2}>Bio</FormLabel>
                                <Textarea rows={3} id="bio" {...register('bio', {
                                    required: 'This is required',
                                    minLength: { value: 3, message: 'Minimum length should be 3' },
                                })} />
                                <FormErrorMessage>
                                    {errors.bio ? errors.bio.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>
                        </SimpleGrid>

                        <SimpleGrid columns={1} spacing={5}>
                            <FormControl isInvalid={errors.blood_group}>
                                <FormLabel htmlFor="blood_group" mb={2}>Blood Group</FormLabel>
                                <Select id="blood_group" {...register('blood_group')} placeholder='Select blood group'>
                                    {blood_groups.map((b, i) => (
                                        <option value={b.toLowerCase()} key={i}>{b}</option>
                                    ))}
                                </Select>
                                <FormErrorMessage>
                                    {errors.blood_group ? errors.bio.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>
                        </SimpleGrid>
                    </SimpleGrid>
                    <Button mt={4} colorScheme='teal' isLoading={loading} type='submit'>
                        Update Profile
                    </Button>
                </form>
            </Box>
        </Flex>
    )
}

export default ProfileUpdate