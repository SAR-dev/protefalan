import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../api";
import { setLocalAccessToken } from "../helpers";
import useAuthStore from "../store";
import UnAuthLayout from "../layouts/UnAuthLayout";
import { Link } from 'react-router-dom';

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAccessToken } = useAuthStore();
  const history = useHistory();
  const toast = useToast();

  const submit = () => {
    setLoading(true);
    signIn({ email, password }).then((res) => {
      if (res.error) {
        setLoading(false);
        toast({
          title: "Signin failed.",
          description: res.error.detail,
          status: "error",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
        });
      } else {
        setLoading(false);
        setLocalAccessToken(res.access);
        setAccessToken(res.access);
        window.location.reload()
      }
    });
  };

  return (
    <UnAuthLayout>
      <Box position={"relative"}>
        <Container as={SimpleGrid} maxW="7xl" columns={2} spacing={32} py={32}>
          <Stack spacing={20}>
            <Heading lineHeight={1.1} fontSize="6xl">
              Senior web designers{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                &
              </Text>{" "}
              Full-Stack Developers
            </Heading>
            <Stack direction={"row"} spacing={4} align={"center"}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size="lg"
                    position={"relative"}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: "full",
                      height: "full",
                      rounded: "full",
                      transform: "scale(1.125)",
                      bgGradient: "linear(to-bl, red.400,pink.400)",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
                +
              </Text>
              <Flex
                align={"center"}
                justify={"center"}
                fontFamily={"heading"}
                fontSize={{ base: "sm", md: "lg" }}
                bg={"gray.800"}
                color={"white"}
                rounded={"full"}
                width="60px"
                height="60px"
                position={"relative"}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  bgGradient: "linear(to-bl, orange.400,yellow.400)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Welcome Back !
              </Heading>
              <Text color="gray.500" fontSize={{ base: "sm", sm: "md" }}>
                We have missed you a lot. Its great to see you again. You are just
                one step away from enjoying our cool features. Sign in and enjoy!
              </Text>
            </Stack>
            <Box as={"form"} mt={10}>
              <Stack spacing={4}>
                <Box>
                  <Text color="gray.500" fontWeight="semibold" mb={2}>
                    Email Address
                  </Text>
                  <Input
                    placeholder="john@email.com"
                    bg="gray.100"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: "gray.300",
                    }}
                    disabled={loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={e => {
                      if(e.keyCode === 13){
                        submit();
                      }
                    }}
                  />
                </Box>
                <Box>
                  <Text color="gray.500" fontWeight="semibold" mb={2}>
                    Password
                  </Text>
                  <Input
                    placeholder="******"
                    type="password"
                    bg="gray.100"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: "gray.300",
                    }}
                    disabled={loading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={e => {
                      if(e.keyCode === 13){
                        submit();
                      }
                    }}
                  />
                </Box>
              </Stack>
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, teal.400,blue.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, teal.400,blue.400)",
                }}
                isLoading={loading}
                onClick={submit}
              >
                Sign In
              </Button>
              <Button variant="outline" as={Link} to="/signup" w="full" mt={5}>
                Don't have an  account ?
              </Button>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Box>
    </UnAuthLayout>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width="30vw"
      zIndex="0"
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default Signin;
