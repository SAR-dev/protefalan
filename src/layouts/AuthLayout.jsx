import {
  Flex,
  Box,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import UnAuthFooter from "./UnAuthFooter";
import { useEffect } from "react";
import { getLocalAccessToken } from "../helpers";

const AuthLayout = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    if (!getLocalAccessToken()) {
      history.push("/signin");
    }
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
