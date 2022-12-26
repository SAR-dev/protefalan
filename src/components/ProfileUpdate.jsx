import { useState } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { getOwnProfile, postUpdateProfile } from "../api";
import { useQuery } from "@tanstack/react-query";

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

const genders = ["Male", "Female"]

const fields = [
    "nick_name",
    "bio",
    "quote",
    "blood_group",
    "gender",
    "contact_email",
    "contact_number",
    "website",
    "location",
    "languages",
    "facebook",
    "twitter",
    "github",
    "educations",
    "certifications"
]

const ProfileUpdate = () => {
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const [initialized, setInitialized] = useState(false)


    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm()

    const { status, data, error, isError, isFetching, isLoading } = useQuery(
        ["profile_me"],
        () => getOwnProfile(), {
        onSuccess: (res) => {
            if (res) {
                fields.forEach(key => {
                    if (key === "educations" || key === "certifications" || key === "languages") {
                        setValue(key, res[key].join("\n"))
                    } else {
                        setValue(key, res[key])
                    }
                })
            }
            setInitialized(true)
        },
        enabled: !initialized

    });

    function onSubmit(values) {
        setLoading(true)
        const d = {...values}

        d.educations = [...values.educations.split("\n")]
        d.certifications = [...values.certifications.split("\n")]
        d.languages = [...values.languages.split("\n")]

        postUpdateProfile(d).then(res => {
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
                toast({
                    title: "Updated",
                    description: "Profile updated.",
                    status: "info",
                    position: "bottom-left",
                    duration: 9000,
                    isClosable: true,
                });
                setLoading(false)
                setInitialized(false)
                queryClient.invalidateQueries(["profile_me"])
            }
        })
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
                    <SimpleGrid columns={2} spacing={10} alignItems="baseline">
                        <SimpleGrid columns={1} spacing={5}>
                            <FormControl isInvalid={errors.nick_name}>
                                <FormLabel htmlFor="nick_name" mb={2}>Nick name</FormLabel>
                                <Input id="nick_name" {...register('nick_name')} />
                                <FormErrorMessage>
                                    {errors.nick_name ? errors.nick_name.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.quote}>
                                <FormLabel htmlFor="quote" mb={2}>Quote</FormLabel>
                                <Input id="quote" {...register('quote')} />
                                <FormErrorMessage>
                                    {errors.quote ? errors.quote.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.bio}>
                                <FormLabel htmlFor="bio" mb={2}>Bio</FormLabel>
                                <Textarea rows={5} id="bio" {...register('bio')} />
                                <FormErrorMessage>
                                    {errors.bio ? errors.bio.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.location}>
                                <FormLabel htmlFor="location" mb={2}>Location</FormLabel>
                                <Input id="location" {...register('location')} />
                                <FormErrorMessage>
                                    {errors.location ? errors.location.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.facebook}>
                                <FormLabel htmlFor="facebook" mb={2}>Facebook link</FormLabel>
                                <Input id="facebook" {...register('facebook')} />
                                <FormErrorMessage>
                                    {errors.facebook ? errors.facebook.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.twitter}>
                                <FormLabel htmlFor="twitter" mb={2}>Twitter link</FormLabel>
                                <Input id="twitter" {...register('twitter')} />
                                <FormErrorMessage>
                                    {errors.twitter ? errors.twitter.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.github}>
                                <FormLabel htmlFor="github" mb={2}>Github link</FormLabel>
                                <Input id="github" {...register('github')} />
                                <FormErrorMessage>
                                    {errors.github ? errors.github.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.website}>
                                <FormLabel htmlFor="website" mb={2}>Website</FormLabel>
                                <Input id="website" {...register('website')} />
                                <FormErrorMessage>
                                    {errors.website ? errors.website.message : "Ok"}
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
                                    {errors.blood_group ? errors.blood_group.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.gender}>
                                <FormLabel htmlFor="gender" mb={2}>Gender</FormLabel>
                                <Select id="gender" {...register('gender')} placeholder='Select blood group'>
                                    {genders.map((b, i) => (
                                        <option value={b.toLowerCase()} key={i}>{b}</option>
                                    ))}
                                </Select>
                                <FormErrorMessage>
                                    {errors.gender ? errors.gender.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.contact_email}>
                                <FormLabel htmlFor="contact_email" mb={2}>Contact Email</FormLabel>
                                <Input id="contact_email" {...register('contact_email')} />
                                <FormErrorMessage>
                                    {errors.contact_email ? errors.contact_email.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.contact_number}>
                                <FormLabel htmlFor="contact_number" mb={2}>Contact Number</FormLabel>
                                <Input id="contact_number" {...register('contact_number')} />
                                <FormErrorMessage>
                                    {errors.contact_number ? errors.contact_number.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.languages}>
                                <FormLabel htmlFor="languages" mb={2}>Languages (Use comma to seperate)</FormLabel>
                                <Input id="languages" {...register('languages')} />
                                <FormErrorMessage>
                                    {errors.languages ? errors.languages.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>
                            {/* onChange={e => setTags(e.target.value.replace(/ +/g, ""))} */}

                            <FormControl isInvalid={errors.educations}>
                                <FormLabel htmlFor="educations" mb={2}>Educational Institutions (Use Enter)</FormLabel>
                                <Textarea whiteSpace="pre-wrap" rows={5} id="educations" {...register('educations')} />
                                <FormErrorMessage>
                                    {errors.educations ? errors.educations.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.certifications}>
                                <FormLabel htmlFor="certifications" mb={2}>Certifications (Use Enter)</FormLabel>
                                <Textarea whiteSpace="pre-wrap" rows={5} id="certifications" {...register('certifications')} />
                                <FormErrorMessage>
                                    {errors.certifications ? errors.certifications.message : "Ok"}
                                </FormErrorMessage>
                            </FormControl>

                        </SimpleGrid>
                    </SimpleGrid>
                    <Flex justifyContent="space-between">
                        <Button mt={4} variant="outline" isLoading={loading}>
                            Back
                        </Button>
                        <Button mt={4} colorScheme='teal' isLoading={loading} type='submit'>
                            Update Profile
                        </Button>
                    </Flex>

                </form>
            </Box>
        </Flex>
    )
}

export default ProfileUpdate